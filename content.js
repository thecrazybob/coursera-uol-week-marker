console.log('extension loaded');

// Wait for the page to completely load
document.addEventListener("DOMContentLoaded", function() {

    // wait for 3 seconds before executing the code
    setTimeout(function () {
            const anchors = document.querySelectorAll('a[data-click-key="open_course_home.menu.click.nav_week"]');

            console.log(anchors);

            anchors.forEach(anchor => {
                anchor.addEventListener('click', function () {
                    console.log('i am clicked');
                    const firstChildDiv = this.firstChild;
                    firstChildDiv.innerHTML = '<svg aria-hidden="true" fill="none" focusable="false" height="20" viewBox="0 0 20 20" width="20" id="cds-react-aria-166" class="css-md7hvk"><path d="M10 1a9 9 0 100 18 9 9 0 000-18zM8.36 14.63l-4-4L5.8 9.24l2.56 2.56L14.2 6l1.42 1.42-7.26 7.21z" fill="currentColor"></path></svg>';

                    // Get the userId from the window's object
                    var userId = window.coursera.userId;

                    // Get the courseId from the window's object
                    var courseId = window.coursera.courseId;

                    // Get the weekId from the clicked anchor's data-track-href
                    var weekId = this.getAttribute("data-track-href").slice(-1);

                    // Store the userId, courseId, and weekId in Chrome's persistent storage
                    chrome.storage.local.set({
                        "userId": userId,
                        "courseId": courseId,
                        "weekId": weekId
                    }, function () {
                        console.log("Values stored in Chrome's persistent storage.");
                    });
                });
            });
        }
    , 3000);

});
