/*
* Copyright 2015-2017 WorldWind Contributors
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

requirejs.config({
    waitSeconds: 0
});

requirejs(['./newGlobe'
    // './layerMenuAll',
    // './CS_placemarkLayer',
    // './CS_wmsLayer',
    // './USGS_WT',
    // './USGS_MD',
    // './USGS_MR',
    // './CS_InvisPK'
], function (newGlobe
             // , menuL
) {

    "use strict";

    // console.log(newGlobe.layers);

    newGlobe.goTo(new WorldWind.Position(37.0902, -95.7129, 10000000));
    //
    // let arrMenu = [];
    // let firstTime = true;
    // let toggleCheck = false;
    // let layerSelected, Altitude;
    // let j = 0;
    // const nextL = $(".next");
    // const previousL = $("#previousL");
    // const currentSelectedLayer = $("#currentSelectedLayer");
    // const checkbox = document.getElementById("inpLock");
    // let array=[];
    //
    //
    // //All the event listeners
    // $(document).ready(function () {
    //
    //     var dateT = new Date();
    //     console.log(dateT.toString());
    //
    //     //the beginning value of the button
    //     currentSelectedLayer.prop('value', 'No Layer Selected');
    //     nextL.prop('disabled', true);
    //     previousL.prop('disabled', true);
    //
    //     $("#popover").popover({html: true, placement: "top", trigger: "hover"});
    //
    //     //turn on/off layers
    //     $(menuL.arrType.toString()).click(function () {
    //         console.log(array);
    //         //if the box is not checked initially
    //
    //         let toggle = this;
    //         let arrToggle = toggle.value.split(",");
    //         // array.push(toggle.value);
    //         // console.log(array);
    //
    //         if(firstTime) {
    //             alert("Some layers may take awhile to load. Please be patient.");
    //             firstTime = false; //alert (only appear at the first time)
    //         }
    //
    //         if(!toggleCheck){
    //
    //
    //
    //             arrToggle.forEach(function (value, i) {
    //
    //                 let selectedIndex = newGlobe.layers.findIndex(ele => ele.displayName === value);
    //
    //                 if(selectedIndex>=0){
    //                     if(toggle.checked){
    //                         array.push(toggle.value);
    //                         console.log('push')
    //                     }
    //                 }
    //                 if (newGlobe.layers[selectedIndex] instanceof WorldWind.RenderableLayer) {
    //
    //                     if (selectedIndex < 0 || !newGlobe.layers[selectedIndex].renderables.length) {
    //                         // console.log("1");
    //                         // console.log(selectedIndex);
    //                         // console.log(newGlobe.layers[selectedIndex].renderables.length);
    //
    //                         alert("The layer you selected is tentatively not available. Please try it later.");
    //                         $(toggle).prop('checked', false);
    //
    //                     } else {
    //
    //                         newGlobe.layers[selectedIndex].enabled = toggle.checked;
    //
    //                         if(!toggle.checked){
    //                             console.log('close');
    //                             array.splice(array.length-1,1);
    //                             console.log(array)
    //                         }
    //
    //                         if (toggle.checked && i === 0) {
    //                             let layerRequest = 'layername=' + value;
    //                             globePosition(layerRequest);
    //                         }
    //                         buttonControl(toggle.checked);
    //
    //                         if (newGlobe.layers[selectedIndex].layerType === 'USGSWT_PKLayer') {
    //                             barChange(value)
    //                         }
    //                     }
    //                 } else { // turn on the lock to select only one layer
    //                     if (selectedIndex < 0) {
    //                         // console.log("2");
    //                         // console.log(selectedIndex);
    //                         // console.log(newGlobe.layers[selectedIndex].renderables.length);
    //                         alert("The layer you selected is tentatively not available. Please try it later.");
    //                         $(toggle).prop('checked', false);
    //                         // array.splice(-1,1)
    //
    //                     } else {
    //
    //                         newGlobe.layers[selectedIndex].enabled = toggle.checked;
    //
    //                         if(!toggle.checked){
    //                             console.log('close');
    //                             array.splice(array.length-1,1);
    //                             console.log(array)
    //                         }
    //
    //                         if (toggle.checked && i === 0) {
    //                             let layerRequest = 'layername=' + value;
    //                             globePosition(layerRequest);
    //                         }
    //                         buttonControl(toggle.checked);
    //
    //                         if (newGlobe.layers[selectedIndex].layerType === 'USGSWT_PKLayer') {
    //                             barChange(value)
    //                         }
    //                     }
    //                 }
    //             });
    //
    //         }else{
    //             console.log('only on layer');
    //
    //             arrToggle.forEach(function (value, i) {
    //
    //                 let selectedIndex = newGlobe.layers.findIndex(ele => ele.displayName === value);
    //
    //                 if(selectedIndex>=0){
    //                     if(toggle.checked){
    //                         array.push(toggle.value);
    //                         console.log('open')
    //                     }
    //                 }
    //                 console.log(array);
    //
    //                 if (newGlobe.layers[selectedIndex] instanceof WorldWind.RenderableLayer) {
    //                     if (selectedIndex < 0 || !newGlobe.layers[selectedIndex].renderables.length) {
    //                         // console.log("3");
    //                         // console.log(selectedIndex);
    //                         // console.log(newGlobe.layers[selectedIndex].renderables.length);
    //                         alert("The layer you selected is tentatively not available. Please try it later.");
    //                         $(toggle).prop('checked', false);
    //
    //                     } else {
    //                         newGlobe.layers[selectedIndex].enabled = toggle.checked;
    //
    //                         if (toggle.checked && i === 0) {
    //                             let layerRequest = 'layername=' + value;
    //                             globePosition(layerRequest);
    //                         }
    //                         closeToggle(array);
    //
    //                         if(!toggle.checked){
    //                             console.log('close');
    //                             array.splice(array.length-1,1);
    //                             console.log(array)
    //                         }
    //
    //                         buttonControl(toggle.checked);
    //
    //                         if (newGlobe.layers[selectedIndex].layerType === 'USGSWT_PKLayer') {
    //                             barChange(value)
    //                         }
    //                     }
    //                 } else {
    //                     if (selectedIndex < 0) {
    //                         // console.log("4");
    //                         // console.log(selectedIndex);
    //                         // console.log(newGlobe.layers[selectedIndex].renderables.length);
    //                         alert("The layer you selected is tentatively not available. Please try it later.");
    //                         $(toggle).prop('checked', false);
    //                         array.splice(-1,1)
    //
    //                     } else {
    //
    //                         newGlobe.layers[selectedIndex].enabled = toggle.checked;
    //
    //                         if (toggle.checked && i === 0) {
    //                             let layerRequest = 'layername=' + value;
    //                             globePosition(layerRequest);
    //                         }
    //
    //                         closeToggle(array);
    //
    //                         if(toggle.checked===false){
    //                             console.log('hh');
    //                             array.splice(-1,1);
    //                             console.log(array)
    //                         }
    //
    //                         buttonControl(toggle.checked);
    //
    //                         if (newGlobe.layers[selectedIndex].layerType === 'USGSWT_PKLayer') {
    //                             barChange(value)
    //                         }
    //                     }
    //                 }
    //             });
    //         }
    //     });
    //
    //     $(".btn-lock").click(function () {
    //         if(checkbox.checked){
    //             toggleCheck=false;
    //
    //         }else { //lock the lock to select only one layer
    //             console.log('hh');
    //
    //             toggleCheck=true;
    //
    //             if(alert("All the layers are going to be closed except for the most recent one.")){
    //                 if(arrMenu.length>1){
    //                     closeAllToggle()
    //                 }
    //             }
    //         }
    //     });
    //
    //
    //     $('#previousL').click(function () {
    //         nextL.prop('disabled', false);
    //         if (j < 1) { //if there was only one switch was checked
    //             previousL.prop('disabled', true) //
    //         } else {//if there was more than one switch was checked
    //             j = j - 1;
    //             currentSelectedLayer.prop('value', arrMenu[j]); //value of currentSelectedLayer changes to the previous one
    //
    //             if (j === 0) {
    //                 previousL.prop('disabled', true);// if there is no previous layer ,then the button would be disabled
    //             }
    //         }
    //     });
    //
    //     $('#nextL').click(function () {
    //         if (j !== arrMenu.length - 1) { // if there is not only one switch was selected
    //             if (j === arrMenu.length - 2) {
    //                 nextL.prop('disabled', true);
    //             }
    //             j = j + 1;
    //             previousL.prop('disabled', false);
    //             currentSelectedLayer.prop('value', arrMenu[j]);
    //         }
    //     });
    //
    //     //if the opened layer was clicked, the layer shows
    //     $('#currentSelectedLayer').click(function () {
    //
    //         let currentSelectedLayerData = "thirdlayer=" + arrMenu[j];
    //         $.ajax({
    //             url: '/currentLayer',
    //             type: 'GET',
    //             dataType: 'json',
    //             data: currentSelectedLayerData,
    //             async: false,
    //             success: function (results) {
    //                 let FirstLayerId = '#' + results[0].FirstLayer;
    //                 let SecondLayerId = '#' + results[0].FirstLayer + '-' + results[0].SecondLayer;
    //
    //                 newGlobe.goTo(new WorldWind.Position(results[0].Latitude, results[0].Longitude, results[0].Altitude * 1000));
    //
    //                 $(FirstLayerId).collapse('show');
    //                 $(SecondLayerId).collapse('show');
    //
    //             }
    //         });
    //     });
    //
    //     $('#globeOrigin').click(function () {
    //         newGlobe.goTo(new WorldWind.Position(37.0902, -95.7129, 9000000));
    //     });
    //
    //     newGlobe.addEventListener("mousemove", handleMouseMove);
    //
    //     newGlobe.addEventListener("click", handleMouseCLK);
    // });
    //
    //
    // function closeToggle(array){
    //
    //     if (arrMenu.length> 0 ) {
    //         // var clickedClass = '.'+arrMenu[arrMenu.length-1] + ':input[value="' + array[array.length-1] + '"]';
    //         var clickedClass = array[0];
    //         $( "input[value= "+ clickedClass+"]" ).prop('checked',false);
    //
    //
    //         var lastIndex = newGlobe.layers.findIndex(ele => ele.displayName === array[0]);
    //
    //         newGlobe.layers[lastIndex].enabled = false;
    //
    //
    //         arrMenu.splice(-1,1);
    //         array.splice(0,1);
    //
    //     }
    //
    // }
    //
    //
    //
    // function closeAllToggle() {
    //     console.log('>0');
    //         for(var i =0; i <arrMenu.length; i++){
    //             var clickedClass =array[i];
    //             $( "input[value= "+ clickedClass+"]" ).prop('checked',false);
    //             var lastIndex = newGlobe.layers.findIndex(ele => ele.displayName === array[i]);
    //             console.log(lastIndex);
    //             newGlobe.layers[lastIndex].enabled = false;
    //         }
    //
    //     arrMenu[0]=arrMenu[arrMenu.length-1];
    //     arrMenu.splice(1);
    //     array[0]=array[array.length-1];
    //     array.splice(1);
    //
    //     console.log(arrMenu);
    //
    //     var name= array[0];
    //     $( "input[value= "+ name+"]" ).prop('checked',true);
    //     var Index = newGlobe.layers.findIndex(ele => ele.displayName === array[0]);
    //     console.log(Index);
    //     newGlobe.layers[Index].enabled =true;
    //
    // }
    //
    // function handleMouseCLK(e) {
    //     let x = e.clientX,
    //         y = e.clientY;
    //     let pickListCLK = newGlobe.pick(newGlobe.canvasCoordinates(x, y));
    //
    //     pickListCLK.objects.forEach(function (value) {
    //         let pickedPM = value.userObject;
    //         if (pickedPM instanceof WorldWind.Placemark && pickedPM.userProperties.layerType === 'CS_PKLayer') {
    //             sitePopUp(pickedPM);
    //         } else if (pickedPM instanceof WorldWind.Placemark && pickedPM.userProperties.layerType === 'CS_InvisPK') {
    //             sitePopUp(pickedPM);
    //         }
    //     })
    // }
    //
    // function sitePopUp(PM) {
    //     let popupBodyItem = $("#popupBody");
    //     popupBodyItem.children().remove();
    //
    //     let popupBodyName = $('<p class="site-name"><h4>' + PM.userProperties.layerName + '</h4></p>');
    //     let popupBodyDesc = $('<p class="site-description">' + PM.userProperties.siteDesc + '</p><br>');
    //     let fillerImages = $('<img style="width:100%; height:110%;" src="../images/Pics/' + PM.userProperties.picLocation + '"/>');
    //     let imageLinks = $('<p class="site-link" <h6>Site Link: </h6></p><a href="' + PM.userProperties.url + '">Click here to navigate to the site&#8217;s website </a>');
    //     let copyrightStatus = $('<p  class="copyright" <h6>Copyright Status: </h6>' + PM.userProperties.copyright + '</p><br>');
    //     let coordinates = $('<p class="coordinate" <h6>Latitude and Longitude: </h6>' + PM.position.latitude + PM.position.longitude + '</p><br>');
    //
    //     popupBodyItem.append(popupBodyName);
    //     popupBodyItem.append(popupBodyDesc);
    //     popupBodyItem.append(fillerImages);
    //     popupBodyItem.append(imageLinks);
    //     popupBodyItem.append(copyrightStatus);
    //     popupBodyItem.append(coordinates);
    //
    //     let modal = document.getElementById('popupBox');
    //     let span = document.getElementById('closeIt');
    //
    //     modal.style.display = "block";
    //
    //     span.onclick = function () {
    //         modal.style.display = "none";
    //     };
    //
    //     window.onclick = function (event) {
    //         if (event.target === modal) {
    //             modal.style.display = "none";
    //         }
    //     }
    // }
    //
    // function globePosition(request) {
    //     $.ajax({
    //         url: '/position',
    //         type: 'GET',
    //         dataType: 'json',
    //         data: request, //send the most current value of the selected switch to server-side
    //         async: false,
    //         success: function (results) {
    //             layerSelected = results[0];
    //             Altitude = layerSelected.Altitude * 1000;
    //             newGlobe.goTo(new WorldWind.Position(layerSelected.Latitude, layerSelected.Longitude, Altitude));
    //
    //             // console.log('globePosition');
    //         }
    //     })
    // }
    //
    // function buttonControl(toggleOn) {
    //
    //     if (toggleOn) {
    //         // insert the current third layer onto button
    //         currentSelectedLayer.prop('value', layerSelected.ThirdLayer);
    //
    //         //insert current ThirdLayer value to arrMenu
    //         arrMenu.push(layerSelected.ThirdLayer);
    //
    //         j = arrMenu.length - 1; //count
    //
    //         // reset next/previous status with disable/enable
    //         if (arrMenu.length === 1) { //if the length of arrMenu is equal to 1 /if user only checks one switch.
    //             nextL.prop('disabled', true);
    //             previousL.prop('disabled', true);
    //             currentSelectedLayer.prop('disabled', false);
    //         } else {//if user checks more than one switch
    //             previousL.prop('disabled', false);
    //             nextL.prop('disabled', true);
    //         }
    //
    //     } else {
    //
    //         // remove current display ThirdLayer from arrMenu
    //         arrMenu.splice(arrMenu.findIndex(elem => elem === layerSelected.ThirdLayer), 1);
    //
    //         j = arrMenu.length - 1;
    //
    //         // reset next/previous status with disable/enable
    //         if (arrMenu.length === 0) {
    //             currentSelectedLayer.prop('value', 'No Layer Selected');
    //             currentSelectedLayer.prop('disabled', true);
    //             previousL.prop('disabled', true);
    //             nextL.prop('disabled', true);
    //             newGlobe.goTo(new WorldWind.Position(37.0902, -95.7129, 9000000));
    //         } else {
    //             currentSelectedLayer.prop('value', arrMenu[arrMenu.length - 1]);
    //             if (arrMenu.length === 1) {
    //                 nextL.prop('disabled', true);
    //                 previousL.prop('disabled', true)
    //             } else {
    //                 previousL.prop('disabled', false);
    //                 nextL.prop('disabled', true);
    //             }
    //         }
    //     }
    // }
    //
    // function handleMouseMove(o) {
    //     if ($("#popover").is(":visible")) {
    //         $("#popover").hide();
    //     }
    //
    //     // The input argument is either an Event or a TapRecognizer. Both have the same properties for determining
    //     // the mouse or tap location.
    //     let x = o.clientX,
    //         y = o.clientY;
    //
    //     // Perform the pick. Must first convert from window coordinates to canvas coordinates, which are
    //     // relative to the upper left corner of the canvas rather than the upper left corner of the page.
    //
    //     let pickList = newGlobe.pick(newGlobe.canvasCoordinates(x, y));
    //
    //     for (let q = 0; q < pickList.objects.length; q++) {
    //         let pickedPL = pickList.objects[q].userObject;
    //
    //         if (pickedPL instanceof WorldWind.Placemark && !!pickedPL.userProperties.p_name) {
    //
    //             let xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    //             let yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    //             //
    //             let popover = document.getElementById('popover');
    //             popover.style.position = "absolute";
    //             popover.style.left = (x + xOffset - 3) + 'px';
    //             popover.style.top = (y + yOffset - 3) + 'px';
    //
    //             let content = "<p><strong>Project Name:</strong> " + pickedPL.userProperties.p_name +
    //                 "<br>" + "<strong>Year Online:</strong> " + pickedPL.userProperties.p_year +
    //                 "<br>" + "<strong>Rated Capacity:</strong> " + pickedPL.userProperties.p_avgcap +
    //                 "<br>" + "<strong>Total Height:</strong> " + pickedPL.userProperties.t_ttlh + "</p>";
    //
    //
    //             $("#popover").attr('data-content', content);
    //             $("#popover").show();
    //         } else if (pickedPL instanceof WorldWind.Placemark && !!pickedPL.userProperties.dep_name) {
    //             let xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    //             let yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    //             //
    //             let popover = document.getElementById('popover');
    //             popover.style.position = "absolute";
    //             popover.style.left = (x + xOffset - 3) + 'px';
    //             popover.style.top = (y + yOffset - 3) + 'px';
    //
    //             let content = "<p><strong>Site Name:</strong> " + pickedPL.userProperties.dep_name +
    //                 "<br>" + "<strong>Commodity:</strong> " + pickedPL.userProperties.commodity +
    //                 "<br>" + "<strong>Development Status:</strong> " + pickedPL.userProperties.dep_type + "</p>";
    //
    //             $("#popover").attr('data-content', content);
    //             $("#popover").show();
    //         } else if (pickedPL instanceof WorldWind.Placemark && !!pickedPL.userProperties.site_name) {
    //             let xOffset = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    //             let yOffset = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
    //             //
    //             let popover = document.getElementById('popover');
    //             popover.style.position = "absolute";
    //             popover.style.left = (x + xOffset - 3) + 'px';
    //             popover.style.top = (y + yOffset - 3) + 'px';
    //
    //             let content = "<p><strong>Site Name:</strong> " + pickedPL.userProperties.site_name +
    //                 "<br>" + "<strong>Commodity:</strong> " + pickedPL.userProperties.commodity +
    //                 "<br>" + "<strong>Development Status:</strong> " + pickedPL.userProperties.dev_stat + "</p>";
    //
    //             $("#popover").attr('data-content', content);
    //             $("#popover").show();
    //         }
    //     }
    // }
    //
    // function barChange(toggleV) {
    //
    //     const left = $("#leftScale");
    //     const right = $("#rightScale");
    //
    //     left.html(config[toggleV].Min);
    //     right.html(config[toggleV].Max);
    //
    // }


    var layers = newGlobe.layers;

    var j,
        loca
        ,laname,
        locat,
        col,
        colo
        // ,checkboxes
        ;

    var LayerInfo = []
        // CoordinateLatInfo = [], CoordinateLongInfo = [],
        ;

    $('.btn').click(function() {
        var CurrentToggleVal = $(this).val();

        $.getJSON("LayerNCC.json", function (layer) {
            for (j = 0; j < layer.length; j++) {

                if (CurrentToggleVal === layer[j].Layer_Name) {
                    LayerInfo.push(layer[j]);
                    loca = layer[j].Latitude_and_Longitude_Decimal;
                    listLoca.push(loca);
                    buttonPopUp(LayerInfo);
                }
            }
        });

    });

    $('.plckJSON').click(function () {
        // var CurrentToggleVal = $(this).val();
        // // var getValue = document.getElementsByName('Placemark');
        // // console.log(getValue);
        //
        // for (var b = 0; b < layers.length; b++) {
        //     if (layers[b].displayName === CurrentToggleVal) {
        //         console.log(layers[b].displayName);
        //
        //         if ($(this).prop('checked')) {
        //             console.log("open");
        //             layers[b].enabled = true;
        //
        //         } else {
        //             console.log("closed");
        //             layers[b].enabled = false;
        //
        //         }
        //         break;
        //
        //     } else {
        //         if (b === layers.length - 1) {
        //             console.log("new");
        //
        //             $.getJSON("LayerNCC.json", function (layer) {
        //                 for (j = 0; j < layer.length; j++) {
        //
        //                     if ("Placemark" === layer[j].Layer_Name) {
        //                         LayerInfo.push(layer[j]);
        //                         loca = layer[j].Latitude_and_Longitude_Decimal;
        //                         locat = loca.split(",");
        //                         col = layer[j].Color;
        //                         colo = col.split(" ");
        //                         laname = layer[j].Layer_Name;
        //                         CreatePlacemarkLayer(locat, colo, laname);
        //                         console.log("Ending Loop:" + layers.length);
        //                     }
        //                 }
        //             });
        //         }
        //     }
        // }

        $.getJSON("LayerNCC.json", function (layer) {
            for (j = 0; j < layer.length; j++) {

                if ("Placemark" === layer[j].Layer_Type) {
                    console.log(layer[j].Layer_Type);
                    LayerInfo.push(layer[j]);
                    loca = layer[j].Latitude_and_Longitude_Decimal;
                    locat = loca.split(",");
                    col = layer[j].Color;
                    colo = col.split(" ");
                    laname = layer[j].Layer_Name;
                    CreatePlacemarkLayer(locat, colo, laname);
                    console.log("Ending Loop:" + layers.length);
                }
            }
        });
    });


    // Used if wanted to immediately create a placemark when the checkbox is checked
    // Since the Show On Globe is the submit button, this code is unnecessary
    //
    // $('.switch_right').click(function() {
    //     var CurrentToggleVal = $(this).val();
    //     console.log(CurrentToggleVal);
    //
    //     for (var b = 0; b < layers.length; b++) {
    //         if (layers[b].displayName === CurrentToggleVal) {
    //             // console.log(layers[b].displayName);
    //
    //             if ($(this).prop('checked')) {
    //                 console.log("open");
    //                 layers[b].enabled = true;
    //
    //             } else {
    //                 console.log("closed");
    //                 layers[b].enabled = false;
    //
    //             }
    //             break;
    //
    //         } else {
    //             if (b === layers.length - 1) {
    //                 console.log("new");
    //
    //                 $.getJSON("LayerNCC.json", function (layer) {
    //                     for (j = 0; j < layer.length; j++) {
    //
    //                         if (CurrentToggleVal === layer[j].Layer_Name) {
    //                             LayerInfo.push(layer[j]);
    //                             loca = layer[j].Latitude_and_Longitude_Decimal;
    //                             listLoca.push(loca);
    //                             locat = loca.split(",");
    //                             col = layer[j].Color;
    //                             colo = col.split(" ");
    //                             laname = layer[j].Layer_Name;
    //                             CreatePlacemarkLayer(locat, colo, laname);
    //                             console.log("Ending Loop:" + layers.length);
    //                         }
    //                     }
    //                 });
    //             }
    //         }
    //     }
    //
    // });

    var CreatePlacemarkLayer = function (location, pcolor, lname) {
        var placemark;
        var placemarkAttributes;
        var highlightAttributes;

        placemark = new WorldWind.Placemark(new WorldWind.Position(location[0], location[1], 1e2), false, null);
        placemark.altitudeMode = WorldWind.RELATIVE_TO_GROUND;

        var canvas = document.createElement("canvas"),
            ctx2d = canvas.getContext("2d"),
            size = 64, c = size / 2 - 0.5, innerRadius = 5, outerRadius = 20;

        canvas.width = size;
        canvas.height = size;

        var gradient = ctx2d.createRadialGradient(c, c, innerRadius, c, c, outerRadius);
        gradient.addColorStop(0, pcolor[0]);
        gradient.addColorStop(0.5, pcolor[1]);
        gradient.addColorStop(1, pcolor[2]);

        ctx2d.fillStyle = gradient;
        ctx2d.arc(c, c, outerRadius, 0, 2 * Math.PI, false);
        ctx2d.fill();

        placemarkAttributes = new WorldWind.PlacemarkAttributes(null);
        placemarkAttributes.imageSource = new WorldWind.ImageSource(canvas);
        placemark.attributes = placemarkAttributes;

        var placemarkLayer = new WorldWind.RenderableLayer(lname);
        placemarkAttributes.imageScale = 0.35;
        placemarkAttributes.imageOffset = new WorldWind.Offset(
            WorldWind.OFFSET_FRACTION, 0.5,
            WorldWind.OFFSET_FRACTION, 0.5);
        placemarkAttributes.imageColor = WorldWind.Color.WHITE;


        highlightAttributes = new WorldWind.PlacemarkAttributes(placemarkAttributes);
        highlightAttributes.imageScale = 50/100;
        placemark.highlightAttributes = highlightAttributes;

        placemarkLayer.addRenderable(placemark);

        placemarkLayer.enabled = true;

        newGlobe.addLayer(placemarkLayer);
        // CoordinateLatInfo.push(placemark.position.latitude);
        // CoordinateLongInfo.push(placemark.position.longitude);
    };


    // Placemark Popup
    // var sitePopUp = function(jsonobj) {
    //     var sitename, sitedesc, picpath, siteurl;
    //     var latlong = jsonobj.latitude + "," + jsonobj.longitude;
    //     var popupBodyItem = $("#modalBody");
    //     $(popupBodyItem).children().remove();
    //
    //
    //     for (var z = 0; z < LayerInfo.length; z++) {
    //
    //         if (listLoca[z] === latlong) {
    //             sitename = LayerInfo[z].Site_Name;
    //             picpath = "../images/Placemark_Images/" + LayerInfo[z].Picture_Location;
    //             sitedesc = LayerInfo[z].Site_Description;
    //             siteurl = LayerInfo[z].Link_to_site_Location;
    //             break;
    //         }
    //     }
    //
    //     var popupBodyName = $('<p class="modal-header"><h4>' + sitename + '</h4></p>');
    //     var popupBodyDesc = $('<p class="modal-body">' + sitedesc + '</p><br>');
    //     var popupBodyImg = $('<img class="modal-img" src="' + picpath + '" width=100% height=auto /><br>');
    //     var popupBodyURL = $('<p class="modal-footer">Please click <a href="' + siteurl + '" target="_blank"><span id="href"><b>here</b></span></a> for more detailed information</p>');
    //
    //     popupBodyItem.append(popupBodyName);
    //     popupBodyItem.append(popupBodyDesc);
    //     popupBodyItem.append(popupBodyImg);
    //     popupBodyItem.append(popupBodyURL);
    // };
    //
    // Globe Placemark (Unnecessary)
    // var handleMouseCLK = function (o) {
    //
    //
    //     var x = o.clientX,
    //         y = o.clientY;
    //
    //
    //     var pickList = globe.pick(globe.canvasCoordinates(x, y));
    //     for (var q = 0; q < pickList.objects.length; q++) {
    //         var pickedPL = pickList.objects[q].userObject;
    //         // console.log (pickedPL);
    //         if (pickedPL instanceof WorldWind.Placemark) {
    //             console.log (pickedPL.position.latitude);
    //             sitePopUp(pickedPL.position);
    //             //alert("It Worked");
    //
    //             $(document).ready(function () {
    //
    //                 var modal = document.getElementById('Modal');
    //
    //
    //                 var span = document.getElementsByClassName("close")[0];
    //
    //
    //                 modal.style.display = "block";
    //
    //                 span.onclick = function() {
    //                     modal.style.display = "none";
    //                 };
    //
    //                 window.onclick = function(event) {
    //                     if (event.target == modal) {
    //                         modal.style.display = "none";
    //                     }
    //                 };
    //             })
    //         }
    //     }
    // };
    //
    // globe.addEventListener("click", handleMouseCLK);

    var buttonPopUp = function(jsonobj) {
        console.log(LayerInfo);
        var sitename, sitedesc, picpath, siteurl;
        var popupBodyItem = $("#modalBody");
        $(popupBodyItem).children().remove();

        // for (var z = 0; z < LayerInfo.length; z++) {
        //
        //     console.log(listLoca[z]);
        //     console.log(jsonobj[z]);
        //     if (listLoca[z] === jsonobj[z]) {
        //         sitename = LayerInfo[z].Site_Name;
        //         picpath = "../images/Placemark_Images/" + LayerInfo[z].Picture_Location;
        //         sitedesc = LayerInfo[z].Site_Description;
        //         siteurl = LayerInfo[z].Link_to_site_Location;
        //         console.log(sitename);
        //         return;
        //
        //
        //     }
        // }

        for (var f = 0; f < jsonobj.length; f++) {

            if (LayerInfo[f] === jsonobj[f]) {

                sitename = LayerInfo[f].Site_Name;
                picpath = "../images/Placemark_Images/" + LayerInfo[f].Picture_Location;
                sitedesc = LayerInfo[f].Site_Description;
                siteurl = LayerInfo[f].Link_to_site_Location;
                console.log(sitename);
                break;

            }

        }


        var popupBodyName = $('<p class="site-name"><h4>' + sitename + '</h4></p>');
        var popupBodyDesc = $('<p class="site-description">' + sitedesc + '</p><br>');
        var popupBodyImg = $('<img class="site-img" alt="" src="' + picpath + '" /><br>');
        var popupBodyURL = $('<p class="site-URL">Please click <a href="' + siteurl + '" target="_blank"><span id="href"><b>here</b></span></a> for more detailed information</p>');

        popupBodyItem.append(popupBodyName);
        popupBodyItem.append(popupBodyDesc);
        popupBodyItem.append(popupBodyImg);
        popupBodyItem.append(popupBodyURL);

    };

    $(document).ready(function () {
        var SelectAll = document.getElementsByName('Station');
        console.log(SelectAll);

    });




});
