secs2 = 0;
count = 0;
allBpm = 0;
avgBpm = 0;
bpm = 0;
ns = (navigator.appName == 'Netscape');
ie = (navigator.appName == 'Microsoft Internet Explorer');

function bpmCounter(e) {
    if (ns) clearBpm = e.which;
    else if (ie) clearBpm = event.button;
    timeSeconds = new Date;
    secs = timeSeconds.getTime();
    if (count == 0) {
        document.BeatsPerMinute.AVG.value = "";
        document.BeatsPerMinute.NOW.value = "READY! Start NOW!";
        document.BeatsPerMinute.HIT.value = "";
        document.BeatsPerMinute.ACG.value = "";
        document.BeatsPerMinute.NCG.value = "";
        secs2 = secs;
        count++;
    } else {
        oldBpm = bpm;
        bpm = (1 / ((secs - secs2) / 1000)) * 60;
        bpmChg = (Math.round((bpm - oldBpm) * 10)) / 10;
        count++;
        allBpm = allBpm + bpm;
        oldAvg = avgBpm;
        avgBpm = allBpm / (count - 1);
        avgChg = (Math.round((avgBpm - oldAvg) * 10)) / 10;
        secs2 = secs;
        if (bpmChg >= 0) {
            PbpmChg = "+" + bpmChg
        } else {
            PbpmChg = bpmChg
        }
        if (avgChg >= 0) {
            PavgChg = "+" + avgChg
        } else {
            PavgChg = avgChg
        }
        document.BeatsPerMinute.AVG.value = (Math.round(avgBpm * 100)) / 100;
        document.BeatsPerMinute.ACG.value = PavgChg;
        document.BeatsPerMinute.NOW.value = (Math.round(bpm * 100)) / 100;
        document.BeatsPerMinute.NCG.value = PbpmChg;
        document.BeatsPerMinute.HIT.value = count;
    }
    return true;
}

document.onkeydown = bpmCounter;
document.onmousedown = bpmCounter;
// end BPM Beats Per Minute Counter and Calculator -->
