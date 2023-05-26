var timecodes = [1.4, 3.5, 4.2, 6.3, 9.1];
var time = new Time();
app.enableQE(); // must enable QE

for(var t = 0; t < timecodes.length; t++) {
    time.seconds = timecodes[t];
    // to get the right format for the razor method, we must get the time formatted 
    // it requires the frame rate, and the videoDisplayFormat which can be found at the bottom of:
    // https://ppro-scripting.docsforadobe.dev/_/downloads/en/latest/pdf/#page=133
    timecode = time.getFormatted(app.project.activeSequence.getSettings().videoFrameRate, app.project.activeSequence.getSettings().videoDisplayFormat);
    // razor the track based on its qe track object and timecode
    // qe.project.getActiveSequence().getAudioTrackAt(0).razor(timecode);
    qe.project.getActiveSequence().getVideoTrackAt(0).razor(timecode);
    }