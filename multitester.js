const apiUrl = 'https://app.multitexter.com/v2/app/sendsms';
const apiKey = 'bqY0SxVXpjDUM0mpSWupya0IBVPGWC8vWfEGCRED8MDXvbulZz70ExLDXFI3';


document.getElementById('smsForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

const fetchData = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: new Headers({
         'Content-Type': 'application/json',
         'Authorization': `Bearer ${apiKey}`,
         'Accept': 'application/json',
        }),
    };

fetch(apiUrl, fetchData)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
        .then(responseData => {
        // Handle the response data received from the Multitexter API
            document.getElementById('response').innerText = JSON.stringify(responseData, null, 2);
        })
        .catch(error => {
                    // Handle any errors that occurred during the fetch
                    console.error('Fetch error:', error);
                });
         });
