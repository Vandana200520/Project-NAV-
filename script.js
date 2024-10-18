function populateRooms(type) {
    const departments = {
        emergency: ["Room 101", "Room 102", "Room 103"],
        radiology: ["Reception", "PNDT", "Medical Store", "CR room", "MRI room/CT-scan", "Waiting area", "Washroom", "Doctor Room", "X-ray room", "Demo Room", "USG", "Billing Counter"],
        orthopedics: ["Room 301", "Room 302", "Room 303"],
    };

    const selectedDepartment = document.getElementById(type === 'current' ? 'current-location' : 'destination').value;
    const roomsSelect = document.getElementById(type === 'current' ? 'current-rooms' : 'destination-rooms');

    // Clear previous options
    roomsSelect.innerHTML = '<option value="">Select Room</option>';

    if (selectedDepartment && departments[selectedDepartment]) {
        departments[selectedDepartment].forEach(room => {
            const option = document.createElement('option');
            option.value = room;
            option.textContent = room;
            roomsSelect.appendChild(option);
        });
    }
}

function showDirections() {
    const currentRoom = document.getElementById('current-rooms').value;
    const destinationRoom = document.getElementById('destination-rooms').value;

    if (currentRoom && destinationRoom) {
        // Open images in a new window
        const imageWindow = window.open('', '_blank');
        let imageSrc = ''; // Variable to hold the image source

        // Determine which image to show based on the selected rooms
        if (currentRoom === 'PNDT' && destinationRoom === 'Reception') {
            imageSrc = 'images/PNDTtoReception.png';
        }
        else if (currentRoom === 'Medical Store' && destinationRoom === 'Reception') {
            imageSrc = 'images/MedStoretoRec.png';
        } 
        // Add more conditions for other routes as needed
        else if (currentRoom === 'Waiting area' && destinationRoom === 'Doctor Room') {
            imageSrc = 'images/WaitingArea_Doc.png'; // Example for another route
        } 
        else if (currentRoom === 'Medical Store' && destinationRoom === 'PNDT') {
            imageSrc = 'images/MedicalStore_PNDT.png'; // Example for another route
        }
        else if (currentRoom === 'Medical Store' && destinationRoom === 'Billing Counter') {
            imageSrc = 'images/MedicalStore_Bill.png'; // Example for another route
        }
        // Fallback if no conditions are met
        else {
            imageSrc = ''; // No image to show
        }

        // Write the content to the new window
        imageWindow.document.write(`
            <html>
                <head>
                    <title>Directions Images</title>
                </head>
                <body>
                    <h1>Directions from ${currentRoom} to ${destinationRoom}</h1>
                    ${imageSrc ? 
                        `<img src="${imageSrc}" alt="Directions Image" style="width:100%;max-width:750px;">` : 
                        '<p>No specific directions available for this route.</p>'
                    }
                </body>
            </html>
        `);
        imageWindow.document.close(); // Close the document to render the content
    } else {
        alert('Please select both current location and destination');
    }
}