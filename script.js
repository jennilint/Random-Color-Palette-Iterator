var numberOfCombinations = 27

        function showTwoColors(){
            for (i = 0; i < numberOfCombinations*2; i++) {
                document.getElementsByClassName("colorBlock")[i].style.height = "50%"
                document.getElementsByClassName("colorBlock")[i].style.display = "block"
            }
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementsByClassName("colorBlock2")[i].style.display = "none"
                document.getElementsByClassName("colorBlock3")[i].style.display = "none"
                document.getElementsByClassName("colorBlock4")[i].style.display = "none"
            };
            for (i = 0; i < numberOfCombinations; i++){
                document.getElementById("combination" + [i]).style.height = "23vh"
            }
        }

        function showThreeColors(){
            for (i = 0; i < numberOfCombinations*2; i++) {
                document.getElementsByClassName("colorBlock")[i].style.height = "33.3%"
                document.getElementsByClassName("colorBlock")[i].style.display = "block"
            }
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementsByClassName("colorBlock2")[i].style.height = "33.3%"
                document.getElementsByClassName("colorBlock2")[i].style.display = "block"
                document.getElementsByClassName("colorBlock3")[i].style.display = "none"
                document.getElementsByClassName("colorBlock4")[i].style.display = "none"
            };
            for (i = 0; i < numberOfCombinations; i++){
                document.getElementById("combination" + [i]).style.height = "23vh"
            }
        }

        function showFourColors(){
            for (i = 0; i < numberOfCombinations*2; i++) {
                document.getElementsByClassName("colorBlock")[i].style.height = "25%"
                document.getElementsByClassName("colorBlock")[i].style.display = "block"
            }
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementsByClassName("colorBlock2")[i].style.display = "block"
                document.getElementsByClassName("colorBlock2")[i].style.height = "25%"
                document.getElementsByClassName("colorBlock3")[i].style.display = "block"
                document.getElementsByClassName("colorBlock3")[i].style.height = "25%"
                document.getElementsByClassName("colorBlock4")[i].style.display = "none" 
            };
            for (i = 0; i < numberOfCombinations; i++){
                document.getElementById("combination" + [i]).style.height = "23vh"
            }
        }

        function showFiveColors(){
            for (i = 0; i < numberOfCombinations*2; i++) {
                document.getElementsByClassName("colorBlock")[i].style.height = "20%"
                document.getElementsByClassName("colorBlock")[i].style.display = "block"
            }
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementsByClassName("colorBlock2")[i].style.display = "block"
                document.getElementsByClassName("colorBlock2")[i].style.height = "20%"
                document.getElementsByClassName("colorBlock3")[i].style.display = "block"
                document.getElementsByClassName("colorBlock3")[i].style.height = "20%"
                document.getElementsByClassName("colorBlock4")[i].style.display = "block"
                document.getElementsByClassName("colorBlock4")[i].style.height = "20%"
            };
            for (i = 0; i < numberOfCombinations; i++){
                document.getElementById("combination" + [i]).style.height = "23vh"
            }
        }

         function random_color() {
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);
            var randomColor = "rgb(" + r + "," + g + "," + b + ")";
            return randomColor
        };

        var combinations = [];
        function changeColorBlock() { 
            for (i = 0; i < numberOfCombinations; i++) {
                var combination = [];
                for (j = 0; j < 5; j++) {
                    color = random_color()
                    combination.push(color)
                    document.getElementById("colorBlock" + [i] + "." + [j]).style.backgroundColor = color;
                };
                combinations.push(combination);
                combination = [];
            };
            
        };

        function clearOutlines() {
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementById("combination" + i).style.outline = "none";
            };
        };

        function rgbToHex(values){
            var r = values[0]
            var g = values[1]
            var b = values[2]
            return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
        };

        function rgbToCmyk(r, g, b){
            var computedC = 0;
            var computedM = 0;
            var computedY = 0;
            var computedK = 0;

            //remove spaces from input RGB values, convert to int
            var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
            var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
            var b = parseInt( (''+b).replace(/\s/g,''),10 ); 

            // BLACK
            if (r==0 && g==0 && b==0) {
            computedK = 1;
            return [0,0,0,1];
            }

            computedC = 1 - (r/255);
            computedM = 1 - (g/255);
            computedY = 1 - (b/255);

            var minCMY = Math.min(computedC,
                        Math.min(computedM,computedY));
            computedC = Math.round((computedC - minCMY) / (1 - minCMY) * 100);
            computedM = Math.round((computedM - minCMY) / (1 - minCMY) * 100);
            computedY = Math.round((computedY - minCMY) / (1 - minCMY) * 100);
            computedK = Math.round(minCMY * 100);

            return [computedC,computedM,computedY,computedK];
        }

        function displayChosenCombination(number) {

            //OUTLINES
            //clearOutlines()
            //document.getElementById("combination" + number).style.outline = "2px solid blue";

            //SHOW HIDDEN DISPLAY LETTERS AND CHANGE COLORS
            //document.getElementById("displayLetterContainer").style.display = "block";
            document.getElementById("displayLetterContainer").style.backgroundColor = combinations[number][0]
            if (numberOfColors == 5){
                for (i = 0; i < 10; i++) {
                    document.getElementById("letter" + [i]).style.fill = combinations[number][1] 
                }
                for (i = 0; i < 8; i++) {
                    document.getElementById("letter" + [i]).style.fill = combinations[number][2] 
                }
                for (i = 0; i < 6; i++) {
                    document.getElementById("letter" + [i]).style.fill = combinations[number][3] 
                }
                for (i = 0; i < 3; i++) {
                    document.getElementById("letter" + [i]).style.fill = combinations[number][4] 
                }
            }
            else if (numberOfColors == 4) {
                for (i = 0; i < 10; i++) {
                    document.getElementById("letter" + [i]).style.fill = combinations[number][1] 
                }
                for (i = 0; i < 8; i++) {
                    document.getElementById("letter" + [i]).style.fill = combinations[number][2] 
                }
                for (i = 0; i < 4; i++) {
                    document.getElementById("letter" + [i]).style.fill = combinations[number][3] 
                }
            }
            else if (numberOfColors == 3){
                for (i = 0; i < 10; i++) {
                    document.getElementById("letter" + [i]).style.fill = combinations[number][1] 
                }
                for (i = 0; i < 5; i++) {
                    document.getElementById("letter" + [i]).style.fill = combinations[number][2] 
                }
            }
            else {
                for (i = 0; i < 10; i++) {
                    document.getElementById("letter" + [i]).style.fill = combinations[number][1] 
                }
            };
            

            //ASSIGN COLORS TO DISPLAY BLOCKS
            document.getElementById("displayColorBlock0").style.backgroundColor = combinations[number][0];
            document.getElementById("displayColorBlock1").style.backgroundColor = combinations[number][1];
            document.getElementById("displayColorBlock2").style.backgroundColor = combinations[number][2];
            document.getElementById("displayColorBlock3").style.backgroundColor = combinations[number][3];
            document.getElementById("displayColorBlock4").style.backgroundColor = combinations[number][4];
            
            //DISPLAY SIZE, GRADIENTS AND COLOR VALUE TEXT
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("colorValue")[i].innerHTML = "";
                document.getElementsByClassName("colorValueBlock")[i].style.display = "none";
                document.getElementsByClassName("singleValueContainer")[i].style.display = "none";
            };
            if (numberOfColors == 5) {
                document.getElementById("displayGradientCombination").style.backgroundImage = "linear-gradient(0.25turn," + combinations[number][0] + "," + combinations[number][1] + "," + combinations[number][2] + "," + combinations[number][3] + "," + combinations[number][4] + ")";
                for (i = 0; i < 5; i++) {
                    //HEX VALUE
                    var removeRgbStringStart = combinations[number][i].replace("rgb(", "");
                    var removeRgbStringEnd = removeRgbStringStart.replace(")", "");
                    var splitRgbString = removeRgbStringEnd.split(",");
                    var splitRgbInteger = splitRgbString.map((i) => Number(i));
                    var hexValue = rgbToHex(splitRgbInteger)
                    //CMYK VALUE
                    var r = splitRgbInteger[0];
                    var g = splitRgbInteger[1];
                    var b = splitRgbInteger[2];
                    var cmykValue = rgbToCmyk(r, g, b);
                    var c = cmykValue[0];
                    var m = cmykValue[1];
                    var y = cmykValue[2];
                    var k = cmykValue[3];
                    document.getElementById("colorValue" + i).innerHTML = "C: " + c + "<br>M: " + m + "<br>Y: " + y + "<br>K: " + k +  "<br>R: " + splitRgbString[0] + "<br>G: " + splitRgbString[1] +  "<br>B: " + splitRgbString[2] + "<br>" + hexValue;
                    document.getElementById("colorValueBlock" + i).style.display = "block";
                    document.getElementById("colorValueBlock" + i).style.backgroundColor = combinations[number][i];
                    document.getElementsByClassName("singleValueContainer")[i].style.display = "block";
                };
                document.getElementById("displayColorBlock2").style.display = "block"
                document.getElementById("displayColorBlock3").style.display = "block"
                document.getElementById("displayColorBlock4").style.display = "block"

                //DISPLAY BLOCK SIZE
                for (i = 0; i < 2; i++) {
                document.getElementsByClassName("displayBlock")[i].style.width = 96 / 5 + "%";
                document.getElementsByClassName("displayBlock")[i].style.display = "block";
                }
                for (i = 0; i < 3; i++) {
                    document.getElementsByClassName("displayBlock2")[i].style.width = 96 / 5 + "%"
                };
                //SHAPES
                document.getElementById("displayShapesContainer").style.backgroundColor = combinations[number][0];
                for (i = 0; i < 9; i++) {
                   document.getElementById("shape0." + [i]).style.fill = combinations[number][1]
                }
                for (i = 0; i < 11; i++) {
                    document.getElementById("shape1." + [i]).style.display = "inline";
                    document.getElementById("shape1." + [i]).style.fill = combinations[number][2]
                }
                for (i = 0; i < 20; i++) {
                    document.getElementById("shape2." + [i]).style.display = "inline";
                    document.getElementById("shape2." + [i]).style.fill = combinations[number][3]
                }
                for (i = 0; i < 17; i++) {
                    document.getElementById("shape3." + [i]).style.display = "inline";
                    document.getElementById("shape3." + [i]).style.fill = combinations[number][4]
                }
                 //GRAPHS
                 document.getElementById("displayGraphsContainer").style.backgroundColor = combinations[number][0];
                 for (i = 0; i < 6; i++) {
                    document.getElementById("graph0." + [i]).style.fill = combinations[number][1];
                 }
                 for (i = 0; i < 6; i++) {
                     document.getElementById("graph1." + [i]).style.fill = combinations[number][4];
                 }
                 for (i = 0; i < 6; i++) {
                     document.getElementById("graph2." + [i]).style.fill = combinations[number][3];
                 }
                 for (i = 0; i < 11; i++) {
                     document.getElementById("graph3." + [i]).style.fill = combinations[number][2];
                 }
                   //CHARACTER
                document.getElementById("displayCharacterContainer").style.backgroundColor = combinations[number][0];
                document.getElementById("character0").style.fill = combinations[number][3];
                document.getElementById("character1").style.fill = combinations[number][2];
                for (i = 0; i < 2; i++) {
                    document.getElementById("character2." + [i]).style.fill = combinations[number][4];
                }
                for (i = 0; i < 6; i++) {
                    document.getElementById("character3." + [i]).style.fill = combinations[number][1];
                }
            }
            else if (numberOfColors == 4) {
                document.getElementById("displayGradientCombination").style.backgroundImage = "linear-gradient(0.25turn," + combinations[number][0] + "," + combinations[number][1] + "," + combinations[number][2] + "," + combinations[number][3] + ")";
                for (i = 0; i < 4; i++) {
                    //HEX VALUE
                    var removeRgbStringStart = combinations[number][i].replace("rgb(", "");
                    var removeRgbStringEnd = removeRgbStringStart.replace(")", "");
                    var splitRgbString = removeRgbStringEnd.split(",");
                    var splitRgbInteger = splitRgbString.map((i) => Number(i));
                    var hexValue = rgbToHex(splitRgbInteger)
                    //CMYK VALUE
                    var r = splitRgbInteger[0];
                    var g = splitRgbInteger[1];
                    var b = splitRgbInteger[2];
                    var cmykValue = rgbToCmyk(r, g, b);
                    var c = cmykValue[0];
                    var m = cmykValue[1];
                    var y = cmykValue[2];
                    var k = cmykValue[3];
                    document.getElementById("colorValue" + i).innerHTML = "C: " + c + "<br>M: " + m + "<br>Y: " + y + "<br>K: " + k +  "<br>R: " + splitRgbString[0] + "<br>G: " + splitRgbString[1] +  "<br>B: " + splitRgbString[2] + "<br>" + hexValue;
                    document.getElementById("colorValueBlock" + i).style.display = "block";
                    document.getElementById("colorValueBlock" + i).style.backgroundColor = combinations[number][i];
                    document.getElementsByClassName("singleValueContainer")[i].style.display = "block";   
                };
                document.getElementById("displayColorBlock2").style.display = "block"
                document.getElementById("displayColorBlock3").style.display = "block"
                document.getElementById("displayColorBlock4").style.display = "none"
                //DISPLAY BLOCK SIZE
                for (i = 0; i < 2; i++) {
                document.getElementsByClassName("displayBlock")[i].style.width = 96 / 4 + "%"
                document.getElementsByClassName("displayBlock")[i].style.display = "block";
                };
                for (i = 0; i < 3; i++) {
                    document.getElementsByClassName("displayBlock2")[i].style.width = 96 / 4 + "%"
                };
                //SHAPES
                document.getElementById("displayShapesContainer").style.backgroundColor = combinations[number][0];
                for (i = 0; i < 9; i++) {
                   document.getElementById("shape0." + [i]).style.fill = combinations[number][1]
                }
                for (i = 0; i < 11; i++) {
                    document.getElementById("shape1." + [i]).style.display = "inline";
                    document.getElementById("shape1." + [i]).style.fill = combinations[number][2]
                }
                for (i = 0; i < 20; i++) {
                    document.getElementById("shape2." + [i]).style.display = "inline";
                    document.getElementById("shape2." + [i]).style.fill = combinations[number][3]
                }
                for (i = 0; i < 17; i++) {
                    document.getElementById("shape3." + [i]).style.display = "none";
                }
                 //GRAPHS
                 document.getElementById("displayGraphsContainer").style.backgroundColor = combinations[number][0];
                 for (i = 0; i < 6; i++) {
                    document.getElementById("graph0." + [i]).style.fill = combinations[number][1];
                 }
                 for (i = 0; i < 6; i++) {
                     document.getElementById("graph1." + [i]).style.fill = combinations[number][1];
                 }
                 for (i = 0; i < 6; i++) {
                     document.getElementById("graph2." + [i]).style.fill = combinations[number][3];
                 }
                 for (i = 0; i < 11; i++) {
                     document.getElementById("graph3." + [i]).style.fill = combinations[number][2];
                 }
                  //CHARACTER
                document.getElementById("displayCharacterContainer").style.backgroundColor = combinations[number][0];
                document.getElementById("character0").style.fill = combinations[number][3];
                document.getElementById("character1").style.fill = combinations[number][2];
                for (i = 0; i < 2; i++) {
                    document.getElementById("character2." + [i]).style.fill = combinations[number][2];
                }
                for (i = 0; i < 6; i++) {
                    document.getElementById("character3." + [i]).style.fill = combinations[number][1];
                }
            }
            else if (numberOfColors == 3) {
                document.getElementById("displayGradientCombination").style.backgroundImage = "linear-gradient(0.25turn," + combinations[number][0] + "," + combinations[number][1] + "," + combinations[number][2] + ")";
                for (i = 0; i < 3; i++) {
                    //HEX VALUE
                    var removeRgbStringStart = combinations[number][i].replace("rgb(", "");
                    var removeRgbStringEnd = removeRgbStringStart.replace(")", "");
                    var splitRgbString = removeRgbStringEnd.split(",");
                    var splitRgbInteger = splitRgbString.map((i) => Number(i));
                    var hexValue = rgbToHex(splitRgbInteger)
                    //CMYK VALUE
                    var r = splitRgbInteger[0];
                    var g = splitRgbInteger[1];
                    var b = splitRgbInteger[2];
                    var cmykValue = rgbToCmyk(r, g, b);
                    var c = cmykValue[0];
                    var m = cmykValue[1];
                    var y = cmykValue[2];
                    var k = cmykValue[3];
                    document.getElementById("colorValue" + i).innerHTML = "C: " + c + "<br>M: " + m + "<br>Y: " + y + "<br>K: " + k +  "<br>R: " + splitRgbString[0] + "<br>G: " + splitRgbString[1] +  "<br>B: " + splitRgbString[2] + "<br>" + hexValue;
                    document.getElementById("colorValueBlock" + i).style.display = "block";
                    document.getElementById("colorValueBlock" + i).style.backgroundColor = combinations[number][i];
                    document.getElementsByClassName("singleValueContainer")[i].style.display = "block";
                };
                document.getElementById("displayColorBlock2").style.display = "block"
                document.getElementById("displayColorBlock3").style.display = "none"
                document.getElementById("displayColorBlock4").style.display = "none"
                //DISPLAY BLOCK SIZE
                for (i = 0; i < 2; i++) {
                document.getElementsByClassName("displayBlock")[i].style.width = 96 / 3 + "%"
                document.getElementsByClassName("displayBlock")[i].style.display = "block";
                };
                for (i = 0; i < 3; i++) {
                    document.getElementsByClassName("displayBlock2")[i].style.width = 96 / 3 + "%"
                };
                //SHAPES
                document.getElementById("displayShapesContainer").style.backgroundColor = combinations[number][0];
                for (i = 0; i < 9; i++) {
                   document.getElementById("shape0." + [i]).style.fill = combinations[number][1]
                }
                for (i = 0; i < 11; i++) {
                    document.getElementById("shape1." + [i]).style.display = "inline";
                    document.getElementById("shape1." + [i]).style.fill = combinations[number][2]
                }
                for (i = 0; i < 20; i++) {
                    document.getElementById("shape2." + [i]).style.display = "none";
                }
                for (i = 0; i < 17; i++) {
                    document.getElementById("shape3." + [i]).style.display = "none";
                }
                 //GRAPHS
                 document.getElementById("displayGraphsContainer").style.backgroundColor = combinations[number][0];
                 for (i = 0; i < 6; i++) {
                    document.getElementById("graph0." + [i]).style.fill = combinations[number][1];
                 }
                 for (i = 0; i < 6; i++) {
                     document.getElementById("graph1." + [i]).style.fill = combinations[number][1];
                 }
                 for (i = 0; i < 6; i++) {
                     document.getElementById("graph2." + [i]).style.fill = combinations[number][1];
                 }
                 for (i = 0; i < 11; i++) {
                     document.getElementById("graph3." + [i]).style.fill = combinations[number][2];
                 }
                 //CHARACTER
                document.getElementById("displayCharacterContainer").style.backgroundColor = combinations[number][0];
                document.getElementById("character0").style.fill = combinations[number][2];
                document.getElementById("character1").style.fill = combinations[number][1];
                for (i = 0; i < 2; i++) {
                    document.getElementById("character2." + [i]).style.fill = combinations[number][1];
                }
                for (i = 0; i < 6; i++) {
                    document.getElementById("character3." + [i]).style.fill = combinations[number][1];
                }
            }
            else {
                document.getElementById("displayGradientCombination").style.backgroundImage = "linear-gradient(0.25turn," + combinations[number][0] + "," + combinations[number][1] + ")";
                for (i = 0; i < 2; i++) {
                    //HEX VALUE
                    var removeRgbStringStart = combinations[number][i].replace("rgb(", "");
                    var removeRgbStringEnd = removeRgbStringStart.replace(")", "");
                    var splitRgbString = removeRgbStringEnd.split(",");
                    var splitRgbInteger = splitRgbString.map((i) => Number(i));
                    var hexValue = rgbToHex(splitRgbInteger)
                    //CMYK VALUE
                    var r = splitRgbInteger[0];
                    var g = splitRgbInteger[1];
                    var b = splitRgbInteger[2];
                    var cmykValue = rgbToCmyk(r, g, b);
                    var c = cmykValue[0];
                    var m = cmykValue[1];
                    var y = cmykValue[2];
                    var k = cmykValue[3];
                    document.getElementById("colorValue" + i).innerHTML = "C: " + c + "<br>M: " + m + "<br>Y: " + y + "<br>K: " + k +  "<br>R: " + splitRgbString[0] + "<br>G: " + splitRgbString[1] +  "<br>B: " + splitRgbString[2] + "<br>" + hexValue;
                    document.getElementById("colorValueBlock" + i).style.display = "block";
                    document.getElementById("colorValueBlock" + i).style.backgroundColor = combinations[number][i];
                    document.getElementsByClassName("singleValueContainer")[i].style.display = "block";
                };
                document.getElementById("displayColorBlock2").style.display = "none"
                document.getElementById("displayColorBlock3").style.display = "none"
                document.getElementById("displayColorBlock4").style.display = "none"
                //DISPLAY BLOCK SIZE
                for (i = 0; i < 2; i++) {
                document.getElementsByClassName("displayBlock")[i].style.width = 96 / 2 + "%";
                document.getElementsByClassName("displayBlock")[i].style.display = "block";
                };
                for (i = 0; i < 3; i++) {
                    document.getElementsByClassName("displayBlock2")[i].style.width = 96 / 2 + "%"
                };
                //SHAPES
                document.getElementById("displayShapesContainer").style.backgroundColor = combinations[number][0];
                for (i = 0; i < 9; i++) {
                   document.getElementById("shape0." + [i]).style.fill = combinations[number][1]
                }
                for (i = 0; i < 11; i++) {
                    document.getElementById("shape1." + [i]).style.display = "none";
                }
                for (i = 0; i < 20; i++) {
                    document.getElementById("shape2." + [i]).style.display = "none";
                }
                for (i = 0; i < 17; i++) {
                    document.getElementById("shape3." + [i]).style.display = "none";
                }
                //GRAPHS
                document.getElementById("displayGraphsContainer").style.backgroundColor = combinations[number][0];
                for (i = 0; i < 6; i++) {
                   document.getElementById("graph0." + [i]).style.fill = combinations[number][1];
                }
                for (i = 0; i < 6; i++) {
                    document.getElementById("graph1." + [i]).style.fill = combinations[number][1];
                }
                for (i = 0; i < 6; i++) {
                    document.getElementById("graph2." + [i]).style.fill = combinations[number][1];
                }
                for (i = 0; i < 11; i++) {
                    document.getElementById("graph3." + [i]).style.fill = combinations[number][1];
                }
                //CHARACTER
                document.getElementById("displayCharacterContainer").style.backgroundColor = combinations[number][0];
                document.getElementById("character0").style.fill = combinations[number][0];
                document.getElementById("character1").style.fill = combinations[number][1];
                for (i = 0; i < 2; i++) {
                    document.getElementById("character2." + [i]).style.fill = combinations[number][1];
                }
                for (i = 0; i < 6; i++) {
                    document.getElementById("character3." + [i]).style.fill = combinations[number][1];
                }
            }

            //document.getElementById("displayLetterContainer").style.backgroundColor = combinations[number][0]
            //document.getElementById("displayLetter").style.fill = combinations[number][1] 
        };

        function displayChosenCombinations(){
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("singleValueContainer")[i].style.display = "none";

            };
            for (i = 0; i < numberOfCombinations; i++) {
                document.getElementById("combination" + i).addEventListener("click", displayChosenCombination.bind(event, i), false);
            };
        };

        /*function changeButtonColors() {
            for (i = 0; i < 4; i++) {
            document.getElementById("button" + i).style.backgroundColor = "white"
            }
            if (numberOfColors == 5) {
                document.getElementById("button3").style.backgroundColor = "gray"
            }
            else if (numberOfColors == 4) {
                document.getElementById("button2").style.backgroundColor = "gray"
            }
            else if (numberOfColors == 3) {
                document.getElementById("button1").style.backgroundColor = "gray"
            }
            else {
                document.getElementById("button0").style.backgroundColor = "gray"
            }    
        };*/

        numberOfColors = 2
        document.getElementById("button0").addEventListener("click", function(){showTwoColors(); numberOfColors = 2;})
        document.getElementById("button1").addEventListener("click", function(){showThreeColors(); numberOfColors = 3;})
        document.getElementById("button2").addEventListener("click", function(){showFourColors(); numberOfColors = 4;})
        document.getElementById("button3").addEventListener("click", function(){showFiveColors(); numberOfColors = 5;})

        document.getElementById("button4").addEventListener("click", function(){combinations = []; changeColorBlock(); displayChosenCombinations()})
        
        //BACKGROUND COLOR FUNCTIONS
        function changeBackgroundColorToWhite(){
            document.body.style.backgroundColor = "white";
            document.getElementById("header").style.borderLeft = "2px solid black";
            document.getElementById("header").style.borderRight = "2px solid black";
            document.getElementById("header").style.borderTop = "2px solid black";
            document.getElementById("headerText").style.color = "black";
            document.getElementById("instructionText").style.color = "black";
            document.getElementById("optionsBlock").style.borderLeft = "2px solid black";
            document.getElementById("gallery").style.borderLeft = "2px solid black";
            document.getElementById("sideContainer").style.borderLeft = "2px solid black";
            document.getElementById("sideContainer").style.borderRight = "2px solid black";
            document.getElementById("button4").style.backgroundColor = "white";
            document.getElementById("button4").style.color = "black";
            document.getElementById("button4").style.outline = "2px solid black";
            document.getElementById("generatePDF").style.outline = "2px solid black";
            document.getElementById("generatePDF").style.color = "black";
            document.getElementById("generatePDF").style.backgroundColor = "white";
            for (i = 0; i < 5; i++) {
                 document.getElementsByClassName("colorValue")[i].style.color = "black";
            };
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("seperator")[i].style.borderBottom = "2px solid black";
            };
            for (i = 0; i < 3; i++) {
                document.getElementsByClassName("optionsHeader")[i].style.color = "black";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("emptyBlock")[i].style.borderTop = "2px solid black";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("footerLink")[i].style.color = "black";
            };
            for (i = 0; i < 8; i++) {
                document.getElementsByClassName("colorButton")[i].style.outline = "2px solid black";
            };
            for (i = 0; i < 6; i++) {
                document.getElementsByClassName("displayButton")[i].style.outline = "2px solid black";
                document.getElementsByClassName("displayButton")[i].style.color = "black";
                document.getElementsByClassName("displayButton")[i].style.backgroundColor = "white";
            };
            for (i = 0; i < 4; i++) {
                document.getElementsByClassName("numberButton")[i].style.outline = "2px solid black";
                document.getElementsByClassName("numberButton")[i].style.color = "black";
                document.getElementsByClassName("numberButton")[i].style.backgroundColor = "white";
            };
        };

        function changeBackgroundColorToGray(){
            document.body.style.backgroundColor = "#D0D0D0";
            document.getElementById("header").style.borderLeft = "2px solid #666666";
            document.getElementById("header").style.borderRight = "2px solid #666666";
            document.getElementById("header").style.borderTop = "2px solid #666666";
            document.getElementById("headerText").style.color = "#666666";
            document.getElementById("instructionText").style.color = "#666666";
            document.getElementById("optionsBlock").style.borderLeft = "2px solid #666666";
            document.getElementById("gallery").style.borderLeft = "2px solid #666666";
            document.getElementById("sideContainer").style.borderLeft = "2px solid #666666";
            document.getElementById("sideContainer").style.borderRight = "2px solid #666666";
            document.getElementById("button4").style.backgroundColor = "#D0D0D0";
            document.getElementById("button4").style.color = "#666666";
            document.getElementById("button4").style.outline = "2px solid #666666";
            document.getElementById("generatePDF").style.outline = "2px solid #666666";
            document.getElementById("generatePDF").style.color = "#666666";
            document.getElementById("generatePDF").style.backgroundColor = "#D0D0D0";
            for (i = 0; i < 5; i++) {
                 document.getElementsByClassName("colorValue")[i].style.color = "#666666";
            };
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("seperator")[i].style.borderBottom = "2px solid #666666";
            };
            for (i = 0; i < 3; i++) {
                document.getElementsByClassName("optionsHeader")[i].style.color = "#666666";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("emptyBlock")[i].style.borderTop = "2px solid #666666";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("footerLink")[i].style.color = "#666666";
            };
            for (i = 0; i < 8; i++) {
                document.getElementsByClassName("colorButton")[i].style.outline = "2px solid #666666";
            };
            for (i = 0; i < 6; i++) {
                document.getElementsByClassName("displayButton")[i].style.outline = "2px solid #666666";
                document.getElementsByClassName("displayButton")[i].style.color = "#666666";
                document.getElementsByClassName("displayButton")[i].style.backgroundColor = "#D0D0D0";
            };
            for (i = 0; i < 4; i++) {
                document.getElementsByClassName("numberButton")[i].style.outline = "2px solid #666666";
                document.getElementsByClassName("numberButton")[i].style.color = "#666666";
                document.getElementsByClassName("numberButton")[i].style.backgroundColor = "#D0D0D0";
            };
        };

        function changeBackgroundColorToBeige(){
            document.body.style.backgroundColor = "#DDC7A0";
            document.getElementById("header").style.borderLeft = "2px solid #b38600";
            document.getElementById("header").style.borderRight = "2px solid #b38600";
            document.getElementById("header").style.borderTop = "2px solid #b38600";
            document.getElementById("headerText").style.color = "#b38600";
            document.getElementById("instructionText").style.color = "#b38600";
            document.getElementById("optionsBlock").style.borderLeft = "2px solid #b38600";
            document.getElementById("gallery").style.borderLeft = "2px solid #b38600";
            document.getElementById("sideContainer").style.borderLeft = "2px solid #b38600";
            document.getElementById("sideContainer").style.borderRight = "2px solid #b38600";
            document.getElementById("button4").style.backgroundColor = "#DDC7A0";
            document.getElementById("button4").style.color = "#b38600";
            document.getElementById("button4").style.outline = "2px solid #b38600";
            document.getElementById("generatePDF").style.outline = "2px solid #b38600";
            document.getElementById("generatePDF").style.color = "#b38600";
            document.getElementById("generatePDF").style.backgroundColor = "#DDC7A0";
            for (i = 0; i < 5; i++) {
                 document.getElementsByClassName("colorValue")[i].style.color = "#b38600";
            };
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("seperator")[i].style.borderBottom = "2px solid #b38600";
            };
            for (i = 0; i < 3; i++) {
                document.getElementsByClassName("optionsHeader")[i].style.color = "#b38600";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("emptyBlock")[i].style.borderTop = "2px solid #b38600";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("footerLink")[i].style.color = "#b38600";
            };
            for (i = 0; i < 8; i++) {
                document.getElementsByClassName("colorButton")[i].style.outline = "2px solid #b38600";
            };
            for (i = 0; i < 6; i++) {
                document.getElementsByClassName("displayButton")[i].style.outline = "2px solid #b38600";
                document.getElementsByClassName("displayButton")[i].style.color = "#b38600";
                document.getElementsByClassName("displayButton")[i].style.backgroundColor = "#DDC7A0";
            };
            for (i = 0; i < 4; i++) {
                document.getElementsByClassName("numberButton")[i].style.outline = "2px solid #b38600";
                document.getElementsByClassName("numberButton")[i].style.color = "#b38600";
                document.getElementsByClassName("numberButton")[i].style.backgroundColor = "#DDC7A0";
            };
        };

        function changeBackgroundColorToBlack(){
            document.body.style.backgroundColor = "black";
            document.getElementById("header").style.borderLeft = "2px solid #737373";
            document.getElementById("header").style.borderRight = "2px solid #737373";
            document.getElementById("header").style.borderTop = "2px solid #737373";
            document.getElementById("headerText").style.color = "#737373";
            document.getElementById("instructionText").style.color = "#737373";
            document.getElementById("optionsBlock").style.borderLeft = "2px solid #737373";
            document.getElementById("gallery").style.borderLeft = "2px solid #737373";
            document.getElementById("sideContainer").style.borderLeft = "2px solid #737373";
            document.getElementById("sideContainer").style.borderRight = "2px solid #737373";
            document.getElementById("button4").style.backgroundColor = "black";
            document.getElementById("button4").style.color = "#737373";
            document.getElementById("button4").style.outline = "2px solid #737373";
            document.getElementById("generatePDF").style.outline = "2px solid #737373";
            document.getElementById("generatePDF").style.color = "#737373";
            document.getElementById("generatePDF").style.backgroundColor = "black";
            for (i = 0; i < 5; i++) {
                 document.getElementsByClassName("colorValue")[i].style.color = "#737373";
            };
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("seperator")[i].style.borderBottom = "2px solid #737373";
            };
            for (i = 0; i < 3; i++) {
                document.getElementsByClassName("optionsHeader")[i].style.color = "#737373";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("emptyBlock")[i].style.borderTop = "2px solid #737373";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("footerLink")[i].style.color = "#737373";
            };
            for (i = 0; i < 8; i++) {
                document.getElementsByClassName("colorButton")[i].style.outline = "2px solid #737373";
            };
            for (i = 0; i < 6; i++) {
                document.getElementsByClassName("displayButton")[i].style.outline = "2px solid #737373";
                document.getElementsByClassName("displayButton")[i].style.color = "#737373";
                document.getElementsByClassName("displayButton")[i].style.backgroundColor = "black";
            };
            for (i = 0; i < 4; i++) {
                document.getElementsByClassName("numberButton")[i].style.outline = "2px solid #737373";
                document.getElementsByClassName("numberButton")[i].style.color = "#737373";
                document.getElementsByClassName("numberButton")[i].style.backgroundColor = "black";
            };
        };

        function changeBackgroundColorToBlue(){
            document.body.style.backgroundColor = "#80aaff";
            document.getElementById("header").style.borderLeft = "2px solid #1a1aff";
            document.getElementById("header").style.borderRight = "2px solid #1a1aff";
            document.getElementById("header").style.borderTop = "2px solid #1a1aff";
            document.getElementById("headerText").style.color = "#1a1aff";
            document.getElementById("instructionText").style.color = "#1a1aff";
            document.getElementById("optionsBlock").style.borderLeft = "2px solid #1a1aff";
            document.getElementById("gallery").style.borderLeft = "2px solid #1a1aff";
            document.getElementById("sideContainer").style.borderLeft = "2px solid #1a1aff";
            document.getElementById("sideContainer").style.borderRight = "2px solid #1a1aff";
            document.getElementById("button4").style.backgroundColor = "#80aaff";
            document.getElementById("button4").style.color = "#1a1aff";
            document.getElementById("button4").style.outline = "2px solid #1a1aff";
            document.getElementById("generatePDF").style.outline = "2px solid #1a1aff";
            document.getElementById("generatePDF").style.color = "#1a1aff";
            document.getElementById("generatePDF").style.backgroundColor = "#80aaff";
            for (i = 0; i < 5; i++) {
                 document.getElementsByClassName("colorValue")[i].style.color = "#1a1aff";
            };
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("seperator")[i].style.borderBottom = "2px solid #1a1aff";
            };
            for (i = 0; i < 3; i++) {
                document.getElementsByClassName("optionsHeader")[i].style.color = "#1a1aff";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("emptyBlock")[i].style.borderTop = "2px solid #1a1aff";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("footerLink")[i].style.color = "#1a1aff";
            };
            for (i = 0; i < 8; i++) {
                document.getElementsByClassName("colorButton")[i].style.outline = "2px solid #1a1aff";
            };
            for (i = 0; i < 6; i++) {
                document.getElementsByClassName("displayButton")[i].style.outline = "2px solid #1a1aff";
                document.getElementsByClassName("displayButton")[i].style.color = "#1a1aff";
                document.getElementsByClassName("displayButton")[i].style.backgroundColor = "#80aaff";
            };
            for (i = 0; i < 4; i++) {
                document.getElementsByClassName("numberButton")[i].style.outline = "2px solid #1a1aff";
                document.getElementsByClassName("numberButton")[i].style.color = "#1a1aff";
                document.getElementsByClassName("numberButton")[i].style.backgroundColor = "#80aaff";
            };
        };

        function changeBackgroundColorToPink(){
            document.body.style.backgroundColor = "#ff99ff";
            document.getElementById("header").style.borderLeft = "2px solid #b30086";
            document.getElementById("header").style.borderRight = "2px solid #b30086";
            document.getElementById("header").style.borderTop = "2px solid #b30086";
            document.getElementById("headerText").style.color = "#b30086";
            document.getElementById("instructionText").style.color = "#b30086";
            document.getElementById("optionsBlock").style.borderLeft = "2px solid #b30086";
            document.getElementById("gallery").style.borderLeft = "2px solid #b30086";
            document.getElementById("sideContainer").style.borderLeft = "2px solid #b30086";
            document.getElementById("sideContainer").style.borderRight = "2px solid #b30086";
            document.getElementById("button4").style.backgroundColor = "#ff99ff";
            document.getElementById("button4").style.color = "#b30086";
            document.getElementById("button4").style.outline = "2px solid #b30086";
            document.getElementById("generatePDF").style.outline = "2px solid #b30086";
            document.getElementById("generatePDF").style.color = "#b30086";
            document.getElementById("generatePDF").style.backgroundColor = "#ff99ff";
            for (i = 0; i < 5; i++) {
                 document.getElementsByClassName("colorValue")[i].style.color = "#b30086";
            };
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("seperator")[i].style.borderBottom = "2px solid #b30086";
            };
            for (i = 0; i < 3; i++) {
                document.getElementsByClassName("optionsHeader")[i].style.color = "#b30086";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("emptyBlock")[i].style.borderTop = "2px solid #b30086";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("footerLink")[i].style.color = "#b30086";
            };
            for (i = 0; i < 8; i++) {
                document.getElementsByClassName("colorButton")[i].style.outline = "2px solid #b30086";
            };
            for (i = 0; i < 6; i++) {
                document.getElementsByClassName("displayButton")[i].style.outline = "2px solid #b30086";
                document.getElementsByClassName("displayButton")[i].style.color = "#b30086";
                document.getElementsByClassName("displayButton")[i].style.backgroundColor = "#ff99ff";
            };
            for (i = 0; i < 4; i++) {
                document.getElementsByClassName("numberButton")[i].style.outline = "2px solid #b30086";
                document.getElementsByClassName("numberButton")[i].style.color = "#b30086";
                document.getElementsByClassName("numberButton")[i].style.backgroundColor = "#ff99ff";
            };
        };

        function changeBackgroundColorToYellow(){
            document.body.style.backgroundColor = "#ffff99";
            document.getElementById("header").style.borderLeft = "2px solid #e69900";
            document.getElementById("header").style.borderRight = "2px solid #e69900";
            document.getElementById("header").style.borderTop = "2px solid #e69900";
            document.getElementById("headerText").style.color = "#e69900";
            document.getElementById("instructionText").style.color = "#e69900";
            document.getElementById("optionsBlock").style.borderLeft = "2px solid #e69900";
            document.getElementById("gallery").style.borderLeft = "2px solid #e69900";
            document.getElementById("sideContainer").style.borderLeft = "2px solid #e69900";
            document.getElementById("sideContainer").style.borderRight = "2px solid #e69900";
            document.getElementById("button4").style.backgroundColor = "#ffff99";
            document.getElementById("button4").style.color = "#e69900";
            document.getElementById("button4").style.outline = "2px solid #e69900";
            document.getElementById("generatePDF").style.outline = "2px solid #e69900";
            document.getElementById("generatePDF").style.color = "#e69900";
            document.getElementById("generatePDF").style.backgroundColor = "#ffff99";
            for (i = 0; i < 5; i++) {
                 document.getElementsByClassName("colorValue")[i].style.color = "#e69900";
            };
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("seperator")[i].style.borderBottom = "2px solid #e69900";
            };
            for (i = 0; i < 3; i++) {
                document.getElementsByClassName("optionsHeader")[i].style.color = "#e69900";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("emptyBlock")[i].style.borderTop = "2px solid #e69900";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("footerLink")[i].style.color = "#e69900";
            };
            for (i = 0; i < 8; i++) {
                document.getElementsByClassName("colorButton")[i].style.outline = "2px solid #e69900";
            };
            for (i = 0; i < 6; i++) {
                document.getElementsByClassName("displayButton")[i].style.outline = "2px solid #e69900";
                document.getElementsByClassName("displayButton")[i].style.color = "#e69900";
                document.getElementsByClassName("displayButton")[i].style.backgroundColor = "#ffff99";
            };
            for (i = 0; i < 4; i++) {
                document.getElementsByClassName("numberButton")[i].style.outline = "2px solid #e69900";
                document.getElementsByClassName("numberButton")[i].style.color = "#e69900";
                document.getElementsByClassName("numberButton")[i].style.backgroundColor = "#ffff99";
            };
        };

        function changeBackgroundColorToGreen(){
            document.body.style.backgroundColor = "#80ff80";
            document.getElementById("header").style.borderLeft = "2px solid #008000";
            document.getElementById("header").style.borderRight = "2px solid #008000";
            document.getElementById("header").style.borderTop = "2px solid #008000";
            document.getElementById("headerText").style.color = "#008000";
            document.getElementById("instructionText").style.color = "#008000";
            document.getElementById("optionsBlock").style.borderLeft = "2px solid #008000";
            document.getElementById("gallery").style.borderLeft = "2px solid #008000";
            document.getElementById("sideContainer").style.borderLeft = "2px solid #008000";
            document.getElementById("sideContainer").style.borderRight = "2px solid #008000";
            document.getElementById("button4").style.backgroundColor = "#80ff80";
            document.getElementById("button4").style.color = "#008000";
            document.getElementById("button4").style.outline = "2px solid #008000";
            document.getElementById("generatePDF").style.outline = "2px solid #008000";
            document.getElementById("generatePDF").style.color = "#008000";
            document.getElementById("generatePDF").style.backgroundColor = "#80ff80";
            for (i = 0; i < 5; i++) {
                 document.getElementsByClassName("colorValue")[i].style.color = "#008000";
            };
            for (i = 0; i < 5; i++) {
                document.getElementsByClassName("seperator")[i].style.borderBottom = "2px solid #008000";
            };
            for (i = 0; i < 3; i++) {
                document.getElementsByClassName("optionsHeader")[i].style.color = "#008000";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("emptyBlock")[i].style.borderTop = "2px solid #008000";
            };
            for (i = 0; i < 2; i++) {
                document.getElementsByClassName("footerLink")[i].style.color = "#008000";
            };
            for (i = 0; i < 8; i++) {
                document.getElementsByClassName("colorButton")[i].style.outline = "2px solid #008000";
            };
            for (i = 0; i < 6; i++) {
                document.getElementsByClassName("displayButton")[i].style.outline = "2px solid #008000";
                document.getElementsByClassName("displayButton")[i].style.color = "#008000";
                document.getElementsByClassName("displayButton")[i].style.backgroundColor = "#80ff80";
            };
            for (i = 0; i < 4; i++) {
                document.getElementsByClassName("numberButton")[i].style.outline = "2px solid #008000";
                document.getElementsByClassName("numberButton")[i].style.color = "#008000";
                document.getElementsByClassName("numberButton")[i].style.backgroundColor = "#80ff80";
            };
        };

        //BACKGROUND COLOR BUTTONS
        document.getElementById("button5").addEventListener("click", function(){changeBackgroundColorToWhite()})
        document.getElementById("button6").addEventListener("click", function(){changeBackgroundColorToGray()})
        document.getElementById("button7").addEventListener("click", function(){changeBackgroundColorToBeige()})
        document.getElementById("button8").addEventListener("click", function(){changeBackgroundColorToBlack()})
        document.getElementById("button13").addEventListener("click", function(){changeBackgroundColorToBlue()})
        document.getElementById("button14").addEventListener("click", function(){changeBackgroundColorToPink()})
        document.getElementById("button15").addEventListener("click", function(){changeBackgroundColorToYellow()})
        document.getElementById("button16").addEventListener("click", function(){changeBackgroundColorToGreen()})
        
        function displayBlocksBlock(){
            //hiding other display elements
            document.getElementById("displayGradientCombination").style.display = "none";
            document.getElementById("displayLetterContainer").style.display = "none";
            document.getElementById("displayShapesContainer").style.display = "none"; 
            document.getElementById("displayGraphsContainer").style.display = "none"; 
            //show wanted display element
            document.getElementById("displayBlockCombination").style.display = "flex";
        }

        //Display default mode
        displayBlocksBlock()

        function displayGradientBlock(){
            //hiding other display elements
            document.getElementById("displayBlockCombination").style.display = "none";
            document.getElementById("displayLetterContainer").style.display = "none";
            document.getElementById("displayShapesContainer").style.display = "none"; 
            document.getElementById("displayGraphsContainer").style.display = "none"; 
            document.getElementById("displayCharacterContainer").style.display = "none"; 
            //show wanted display element
            document.getElementById("displayGradientCombination").style.display = "block";
        }

        function displayTypographyBlock(){
            //hiding other display elements
            document.getElementById("displayBlockCombination").style.display = "none";
            document.getElementById("displayGradientCombination").style.display = "none";
            document.getElementById("displayShapesContainer").style.display = "none"; 
            document.getElementById("displayGraphsContainer").style.display = "none"; 
            document.getElementById("displayCharacterContainer").style.display = "none"; 
            //show wanted display element
            document.getElementById("displayLetterContainer").style.display = "flex";
        }
        
        function displayShapesBlock(){
           //hiding other display elements
           document.getElementById("displayBlockCombination").style.display = "none";
           document.getElementById("displayGradientCombination").style.display = "none";
           document.getElementById("displayLetterContainer").style.display = "none";
           document.getElementById("displayGraphsContainer").style.display = "none"; 
           document.getElementById("displayCharacterContainer").style.display = "none"; 
           //show wanted display element
           document.getElementById("displayShapesContainer").style.display = "flex"; 
        }
        function displayGraphsBlock(){
            //hiding other display elements
            document.getElementById("displayBlockCombination").style.display = "none";
            document.getElementById("displayGradientCombination").style.display = "none";
            document.getElementById("displayLetterContainer").style.display = "none";
            document.getElementById("displayShapesContainer").style.display = "none"; 
            document.getElementById("displayCharacterContainer").style.display = "none"; 
            //show wanted display element
            document.getElementById("displayGraphsContainer").style.display = "flex"; 
         }

         function displayCharacterBlock(){
            //hiding other display elements
            document.getElementById("displayBlockCombination").style.display = "none";
            document.getElementById("displayGradientCombination").style.display = "none";
            document.getElementById("displayLetterContainer").style.display = "none";
            document.getElementById("displayShapesContainer").style.display = "none";
            document.getElementById("displayGraphsContainer").style.display = "none"; 
            //show wanted display element
            document.getElementById("displayCharacterContainer").style.display = "block"; 
         }

        //DISPLAY AS -BUTTONS
        document.getElementById("button9").addEventListener("click", function(){displayBlocksBlock()})
        document.getElementById("button10").addEventListener("click", function(){displayGradientBlock()})
        document.getElementById("button11").addEventListener("click", function(){displayTypographyBlock()})
        document.getElementById("button12").addEventListener("click", function(){displayShapesBlock()})
        document.getElementById("button17").addEventListener("click", function(){displayGraphsBlock()})
        document.getElementById("button18").addEventListener("click", function(){displayCharacterBlock()})

            // EI OLE VALMIS
        function copyHex(i) {
            /* Get the text field */
            var copyText = document.getElementById("copyHex" + i);
          
            /* Select the text field */
            copyText.select();
            copyText.setSelectionRange(0, 99999); /* For mobile devices */
          
             /* Copy the text inside the text field */
            navigator.clipboard.writeText(copyText.value);
          
            /* Alert the copied text */
            alert("Copied the text: " + copyText.value);
          }

        //COPY HEX BUTTONS
        displayChosenCombinations()
        changeColorBlock()

        var doc = new jsPDF();
        var elementHTML = $('#contnet').html();
        var specialElementHandlers = {
            '#elementH': function (element, renderer) {
                return true;
            }
        };
        doc.fromHTML(elementHTML, 15, 15, {
            'width': 170,
            'elementHandlers': specialElementHandlers
        });

        // Save the PDF
        doc.save('sample-document.pdf');

     
