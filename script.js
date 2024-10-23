/*
Copyright 2024 Timothy-P

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

*/

window.addEventListener("DOMContentLoaded", function () {
    this.alert("Content loaded.");
});
function Click(event) {
    const element = event.target;
    let highlighted = {};
    highlightElm(element);
}
function addCode(ElmId, ElmType) {
    document.getElementById(ElmId).innerHTML += ElmType;
}

// Checkers functions...
function highlightElm(element) {
    alert(
`Element received: ${element.id}
Element row: ${element.attributes.row.value}
Element colomn: ${element.attributes.colomn.value}`
    )
    var UpperLeft1 = element.attributes.row.value - 1;
    if (UpperLeft1 > 8 || UpperLeft1 < 1) {
        UpperLeft1 = "N/A";
    }
    var UpperLeft2 = element.attributes.colomn.value - 1;
    if (UpperLeft2 > 8 || UpperLeft1 < 1) {
        UpperLeft2 = "N/A";
    }
    if (UpperLeft1 != "N/A" && UpperLeft2 != "N/A") {
        var UpperLeft = `${UpperLeft1}-${UpperLeft2}`;
    }
    var LowerRight1 = element.attributes.row.value +1;
    if (LowerRight1 > 8 || LowerRight1 < 1) {
        LowerRight1 = "N/A";
    }
    let LowerLeft2 = element.attributes.colomn.value - 1;
    if (LowerLeft2 > 8 || LowerLeft1 < 1) {
        LowerLeft2 = "N/A";
    }
    if (LowerRight1 != "N/A" && LowerRight2 != "N/A") {
        var LowerRight = `${LowerRight1}-${LowerRight2}`;
    }

    var LowerLeft1 = element.attributes.row.value - 1;
    if (LowerLeft1 > 8 || LowerLeft1 < 1) {
        LowerLeft1 = "N/A";
    }
    var LowerLeft2 = element.attributes.colomn.value - 1;
    if (LowerLeft2 > 8 || LowerLeft1 < 1) {
        LowerLeft2 = "N/A";
    }
    if (LowerLeft1 != "N/A" && LowerLeft2 != "N/A") {
        var LowerLeft = `${LowerLeft1}-${LowerLeft2}`;
    }

    if (UpperRight1 > 8 || UpperRight1 < 1) {
        UpperRight1 = "N/A";
    }
    var UpperRight2 = element.attributes.colomn.value - 1;
    if (UpperRight2 > 8 || UpperRight1 < 1) {
        UpperRight2 = "N/A";
    }
    if (UpperRight1 != "N/A" && UpperRight2 != "N/A") {
        var UpperRight = `${UpperRight1}-${UpperRight2}`;
    }
    alert(
`Upper left: ${document.getElementById(UpperLeft).id}
    Upper left row: ${document.getElementById(UpperLeft).attributes.row.value}
    Upper left colomn: ${document.getElementById(UpperLeft).attributes.colomn.value}
Upper right: ${document.getElementById(UpperRight).id}
    Upper right row: ${document.getElementById(UpperRight).attributes.row.value}
    Upper right colomn: ${document.getElementById(UpperRight).attributes.colomn.value}
Lower left: ${document.getElementById(LowerLeft).id}
    Lower left row: ${document.getElementById(LowerLeft).attributes.row.value}
    Lower left colomn: ${document.getElementById(LowerLeft).attributes.colomn.value}
Lower right: ${document.getElementById(LowerRight).id}
    Lower right row: ${document.getElementById(LowerRight).attributes.row.value}
    Lower right colomn: ${document.getElementById(LowerRight).attributes.colomn.value}
    `)
}
