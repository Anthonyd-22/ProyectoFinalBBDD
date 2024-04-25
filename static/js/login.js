document.addEventListener('DOMContentLoaded',()=>{
    console.log("Login page is loaded.");
    document.getElementById("login-form").addEventListener("submit", function(event) {
        event.preventDefault();
        const user_id = document.getElementById("user_id").value;
        const password = document.getElementById("password").value;
        var loginData = {
            user_id: user_id,
            password: password
        };
        sendContentToFlask(loginData);

        function sendContentToFlask(content) {
            fetch('/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ content: content }),
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.json();
                })
                .then(data => {
                    if (data['status'] === 'True') {
                        console.log("Login successful.");
                        window.location.href = '/index/' + data['user']['id'];
                    } else {
                        console.log("Login failed.");
                        alert("Login failed. Please try again.");
                    }
                })
                .catch(error => {
                    console.error('There was an error in server response:', error);
                });
        }

    });
});