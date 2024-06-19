# Use an official Node.js image as the base image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Compile TypeScript to JavaScript (if using TypeScript)
RUN npm install -g typescript
RUN npx tsc

# Expose port 5000
EXPOSE 5000

# Start the application
CMD ["npm", "start"]
