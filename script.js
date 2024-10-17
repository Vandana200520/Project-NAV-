function populateRooms(type) {
    const departments = {
        emergency: ["Room 101", "Room 102", "Room 103"],
        pediatrics: ["Room 201", "Room 202", "Room 203"],
        orthopedics: ["Room 301", "Room 302", "Room 303"],
    };

    const selectedDepartment = document.getElementById(type === 'current' ? 'current-location' : 'destination').value;
    const roomsSelect = document.getElementById(type === 'current' ? 'current-rooms' : 'destination-rooms');

    // Clear previous options
    roomsSelect.innerHTML = '<option value="">Select Room</option>';

    if (selectedDepartment) {
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
        alert(`Directions from ${currentRoom} to ${destinationRoom}`);
    } else {
        alert('Please select both current location and destination');
    }
}