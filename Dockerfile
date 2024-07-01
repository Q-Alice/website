# Use the official Python image from the Docker Hub
FROM python:3.9

# Set the working directory in the container
WORKDIR /app

# Copy the requirements.txt file into the container at /app
COPY requirements.txt .

# Install the dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the working directory contents into the container at /app
COPY . .

# Set environment variables for Flask
ENV FLASK_APP=api/index.py
ENV FLASK_ENV=production

# Expose the port the app runs on
EXPOSE 5328

# Run the Flask app
CMD ["flask", "run", "--host=0.0.0.0", "--port=5328"]
