// JavaScript file: likeCounter.js

// Initial count
let likeCount = 0;

// Function to increase the like count
function increaseLikeCount() {
    likeCount++;
    document.getElementById('likeCountDisplay').innerText = likeCount;
}

// Attach the function to the like link button
document.getElementById('likeLinkButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    increaseLikeCount();
});


// Function to share content
function shareContent() {
        if (navigator.share) {
            navigator.share({
                title: 'Amazing Content!',
                text: 'You have to check out this amazing content!',
                url: window.location.href
            }).then(() => {
                console.log('Content shared successfully!');
            }).catch((error) => {
                console.error('Error sharing content:', error);
            });
        } else {
            alert('Web Share API is not supported in this browser.');
        }
    }
    
    // Attach the function to the share button
    document.getElementById('shareButton').addEventListener('click', shareContent);
    
