# Silent Failure of Expo Image Component on 404

This repository demonstrates a bug in the Expo `Image` component where it silently fails to load images resulting in a 404 error.  The issue is that no error is thrown, making debugging challenging.  The solution involves adding custom error handling to detect the failure and provide feedback to the user.

## Bug

The `bug.js` file showcases the problem.  An `Image` component attempts to load an image from a URL that intentionally returns a 404 error.  The image fails to load without producing any console errors or warnings.

## Solution

The `bugSolution.js` file demonstrates a solution.  By utilizing the `onError` prop of the `Image` component, we can capture and handle the error, alerting the user or taking other appropriate actions. This makes debugging considerably easier and provides a better user experience.
