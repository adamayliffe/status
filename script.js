function checkWebsiteStatus(url, elementId) {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            document.getElementById(elementId).querySelector('.status').textContent = "Status: Online";
          } else {
            document.getElementById(elementId).querySelector('.status').textContent = "Status: Offline";
          }
        }
      };
      xhr.send();
    }

    // Check website statuses periodically (every 5 seconds)
    setInterval(function() {
      checkWebsiteStatus("https://www.google.com", "monitor1");
      checkWebsiteStatus("https://www.yahoo.com", "monitor2");
      checkWebsiteStatus("https://www.testing1.com", "monitor3");
      // Add more websites to check as needed
    }, 5000);
