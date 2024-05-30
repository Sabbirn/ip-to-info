async function getIPInfo() {
  const ip = document.getElementById('ipInput').value;
  if (!ip) {
      alert('Please enter an IP address');
      return;
  }

  try {
      const response = await fetch(`https://ipapi.co/${ip}/json/`);
      if (!response.ok) {
          throw new Error('Network response was not ok');
      }
      const data = await response.json();
      displayIPInfo(data);
  } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      document.getElementById('result').innerHTML = '<p>Error fetching data. Please try again.</p>';
  }
}

function displayIPInfo(data) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
      <p class="output"><strong>IP:</strong> ${data.ip}</p>
      <p class="output"><strong>City:</strong> ${data.city}</p>
      <p class="output"><strong>Region:</strong> ${data.region}</p>
      <p class="output"><strong>Country:</strong> ${data.country_name}</p>
      <p class="output"><strong>Postal Code:</strong> ${data.postal}</p>
      <p class="output"><strong>Latitude:</strong> ${data.latitude}</p>
      <p class="output"><strong>Longitude:</strong> ${data.longitude}</p>
      <p class="output"><strong>ISP:</strong> ${data.org}</p>
      <p class="output"><strong>Currency:</strong> ${data.currency}</p>
      <p class="output"><strong>Currency Name:</strong> ${data.currency_name}</p>
      <p class="output"><strong>Country Calling Code:</strong> ${data.country_calling_code}</p>
      <p class="output"><strong>Asn:</strong> ${data.asn}</p>
      <p class="output"><strong>Timezone:</strong> ${data.timezone}</p>
  `;
}
