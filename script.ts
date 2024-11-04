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
function Click(event:HTMLElement) {
    const element = event
    let highlighted = {};
    highlightElm(element);
}
function addCode(ElmId:string, Contents:string) {
    
    document.getElementById(ElmId)!.innerHTML += Contents;
}

// Checkers functions...
function highlightElm(element) {
    alert(
`Element received: ${element.id}
Element row: ${element.attributes.row.value}
Element colomn: ${element.attributes.colomn.value}`
    )

    var UpperLeft:string
    var LowerRight:string
    var UpperRight:string
    var LowerLeft:string

    var UpperLeft1 = `${element.attributes.row.value - 1}`;
    if (parseInt(UpperLeft1) > 8 || parseInt(UpperLeft1) < 1) {
        UpperLeft1 = "N/A";
    };
    var UpperLeft2 = `${element.attributes.colomn.value - 1}`;
    if (parseInt(UpperLeft2) > 8 || parseInt(UpperLeft1) < 1) {
        UpperLeft2 = "N/A";
    };
    if (UpperLeft1 != "N/A" && UpperLeft2 != "N/A") {
        UpperLeft = `${UpperLeft1}-${UpperLeft2}`;
    };
    var LowerRight1 = `${element.attributes.row.value +1}`;
    if (parseInt(LowerRight1) > 8 || parseInt(LowerRight1) < 1) {
        LowerRight1 = "N/A";
    };
    var LowerRight2 = `${element.attributes.colomn.value - 1}`;
    if (parseInt(LowerRight2) > 8 || parseInt(LowerRight2) < 1) {
        LowerRight2 = "N/A";
    };
    if (LowerRight1 != "N/A" && LowerRight2 != "N/A") {
        LowerRight = `${LowerRight1}-${LowerRight2}`;
    };

    var LowerLeft1 = `${element.attributes.row.value - 1}`;
    if (parseInt(LowerLeft1) > 8 || parseInt(LowerLeft1) < 1) {
        LowerLeft1 = "N/A";
    };
    var LowerLeft2 = `${element.attributes.colomn.value - 1}`;
    if (parseInt(LowerLeft2) > 8 || parseInt(LowerLeft1) < 1) {
        LowerLeft2 = "N/A";
    };
    if (LowerLeft1 != "N/A" && LowerLeft2 != "N/A") {
        LowerLeft = `${LowerLeft1}-${LowerLeft2}`;
    };
    var UpperRight1 = `${element.attributes.row.value +1}`;
    if (parseInt(UpperRight1) > 8 || parseInt(UpperRight1) < 1) {
        UpperRight1 = "N/A";
    };
    var UpperRight2 = `${element.attributes.colomn.value - 1}`;
    if (parseInt(UpperRight2) > 8 || parseInt(UpperRight1) < 1) {
        UpperRight2 = "N/A";
    };
    if (UpperRight1 != "N/A" && UpperRight2 != "N/A") {
        UpperRight = `${UpperRight1}-${UpperRight2}`;
    };
};

function temp(List:any) {
    alert(
        `Upper left: ${document.getElementById(`${List[1]}`)}
            Upper left row: ${document.getElementById(`${List[1]}`)}
            Upper left colomn: ${document.getElementById(`${List[1]}`)}
        Upper right: ${document.getElementById(`${List[2]}`)}
            Upper right row: ${document.getElementById(`${List[2]}`)}
            Upper right colomn: ${document.getElementById(`${List[2]}`)}
        Lower left: ${document.getElementById(`${List[3]}`)}
            Lower left row: ${document.getElementById(`${List[3]}`)}
            Lower left colomn: ${document.getElementById(`${List[3]}`)}
        Lower right: ${document.getElementById(`${List[4]}`)}
            Lower right row: ${document.getElementById(`${List[4]}`)}
            Lower right colomn: ${document.getElementById(`${List[4]}`)}
            `);
}
