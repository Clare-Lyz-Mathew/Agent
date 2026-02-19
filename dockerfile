# Use nginx alpine for a lightweight image
FROM nginx:alpine

# Copy the static assets to the default nginx html directory
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/
COPY app.js /usr/share/nginx/html/

# Expose port 80
EXPOSE 80
