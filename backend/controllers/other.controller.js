import { User } from '../models/user.models.js'
import { Agent } from '../models/agent.models.js'
import { Request } from '../models/request.models.js'
// import { generateTokenAndSetCookie } from '../utils/generateTokenAndSetCookie.js';
// import { sendVerificationEmail, sendWelcomeEmail, sendPasswordRestEmail, sendResetSuccessEmail } from '../mailtrap/emails.js';

import dotenv from "dotenv"
dotenv.config()
// Match agents to user requests
export const createRequest = async (req, res) => {
  const { userId, area, ...data}  = req.body;
  console.log("This is userid ", data)

  if (!userId || !area) {
    return res.status(400).json({
      success: false,
      message: "User ID and area are required to create a request",
    });
  }

  try {
    // Match agents based on area
    const matchedAgents = await Agent.find({ area: { $in: [area] } })
      .limit(3) // Limit to 3 agents
      .select("name email phoneNumber area");

    if (!matchedAgents || matchedAgents.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No agents found for the selected area",
      });
    }

    console.log("This are the ", data)
    // Create request
    const request = new Request({
      userId,
      area,
      details:data,
      matchedAgents: matchedAgents.map((agent) => agent._id), // Store matched agent IDs
    });

    await request.save();

    res.status(201).json({
      success: true,
      message: "Request created successfully",
      request,
      matchedAgents,
    });
  } catch (error) {
    console.error("Error creating request:", error);
    res.status(500).json({
      success: false,
      message: "Server error while creating request",
    });
  }
};


export const getUserRequests = async (req, res) => {
  const { userId } = req.params;
  console.log("This is", req.params)

  try {
    // Find all requests made by the user
    const requests = await Request.find({ userId })
      .populate("matchedAgents", "name email phoneNumber area verified")
      .sort({ createdAt: -1 }); // Sort requests by most recent

    if (!requests || requests.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No requests found for this user",
      });
    }

    // Extract agents from the most recent request
    const latestRequest = requests[0]; // Assume we focus on the most recent request
    const newAgents = latestRequest.matchedAgents.filter(agent => !agent.hasBeenDisplayed);

    // Mark the agents as displayed
    await Promise.all(
      newAgents.map(agent => {
        agent.hasBeenDisplayed = true;
        return agent.save();
      })
    );

    res.status(200).json({
      success: true,
      agents: newAgents.slice(0, 3), // Return a maximum of three new agents
    });
  } catch (error) {
    console.error("Error fetching user requests:", error);
    res.status(500).json({
      success: false,
      message: "Server error while fetching user requests",
    });
  }
};


export const getAgentRequests = async (req, res) => {
  const { agentId } = req.params;
  console.log("This is", req.params)

  try {
      // Find requests where the agent is matched
      const requests = await Request.find({ matchedAgents: agentId })
          .populate("userId", "name email phoneNumber ")
          .sort({ createdAt: -1 }); // Sort requests by most recent

      if (!requests || requests.length === 0) {
          return res.status(404).json({
              success: false,
              message: "No requests found for this agent",
          });
      }

      // Return user details for each matched request
      const userRequests = requests.map(req => ({
          user: req.userId,
          requestDetails: req.details,
          area: req.area,
      }));

      res.status(200).json({
          success: true,
          requests: userRequests,
      });
  } catch (error) {
      console.error("Error fetching agent requests:", error);
      res.status(500).json({
          success: false,
          message: "Server error while fetching agent requests",
      });
  }
};

