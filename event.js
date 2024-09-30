function validateForm(event) {
    const name = document.getElementById('name').value;
    if (!name) {
        alert('Please fill in the required field.');
        event.preventDefault();
    }
}
function changeImage(src) {
    document.getElementById('mainImage').src = src;
}
let count = 0;
        function incrementCounter() {
            count++;
            if (count > 10) {
                count = 0;
            }
            document.getElementById('counter').innerText = count;
        }
        function toggleButton() {
            const checkbox = document.getElementById('enableButton');
            const button = document.getElementById('submitButton');
            button.disabled = !checkbox.checked;
        }
        document.addEventListener('mousemove', function(event) {
            document.getElementById('mousePosition').innerText = `Mouse position: (${event.clientX}, ${event.clientY})`;
        });
        document.addEventListener('keydown', function() {
            const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
            document.body.style.backgroundColor = randomColor;
        });
        function formatPhoneNumber() {
            const input = document.getElementById('phoneNumber');
            let value = input.value.replace(/\D/g, '');
            if (value.length > 3 && value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else if (value.length > 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
            input.value = value;
        }
        