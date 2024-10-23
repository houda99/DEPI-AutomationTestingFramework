/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 2089.0, "series": [{"data": [[0.0, 173.0], [0.1, 173.0], [0.2, 173.0], [0.3, 173.0], [0.4, 173.0], [0.5, 173.0], [0.6, 173.0], [0.7, 173.0], [0.8, 173.0], [0.9, 173.0], [1.0, 173.0], [1.1, 173.0], [1.2, 173.0], [1.3, 173.0], [1.4, 173.0], [1.5, 174.0], [1.6, 174.0], [1.7, 174.0], [1.8, 174.0], [1.9, 174.0], [2.0, 174.0], [2.1, 174.0], [2.2, 174.0], [2.3, 174.0], [2.4, 174.0], [2.5, 174.0], [2.6, 174.0], [2.7, 174.0], [2.8, 174.0], [2.9, 174.0], [3.0, 174.0], [3.1, 174.0], [3.2, 174.0], [3.3, 174.0], [3.4, 174.0], [3.5, 175.0], [3.6, 175.0], [3.7, 175.0], [3.8, 175.0], [3.9, 175.0], [4.0, 175.0], [4.1, 175.0], [4.2, 175.0], [4.3, 175.0], [4.4, 175.0], [4.5, 175.0], [4.6, 175.0], [4.7, 175.0], [4.8, 175.0], [4.9, 175.0], [5.0, 175.0], [5.1, 175.0], [5.2, 175.0], [5.3, 175.0], [5.4, 175.0], [5.5, 175.0], [5.6, 175.0], [5.7, 175.0], [5.8, 175.0], [5.9, 175.0], [6.0, 175.0], [6.1, 175.0], [6.2, 175.0], [6.3, 175.0], [6.4, 175.0], [6.5, 175.0], [6.6, 175.0], [6.7, 175.0], [6.8, 175.0], [6.9, 175.0], [7.0, 175.0], [7.1, 175.0], [7.2, 175.0], [7.3, 175.0], [7.4, 175.0], [7.5, 175.0], [7.6, 175.0], [7.7, 175.0], [7.8, 175.0], [7.9, 175.0], [8.0, 175.0], [8.1, 175.0], [8.2, 175.0], [8.3, 175.0], [8.4, 175.0], [8.5, 175.0], [8.6, 175.0], [8.7, 175.0], [8.8, 175.0], [8.9, 175.0], [9.0, 176.0], [9.1, 176.0], [9.2, 176.0], [9.3, 176.0], [9.4, 176.0], [9.5, 176.0], [9.6, 176.0], [9.7, 176.0], [9.8, 176.0], [9.9, 176.0], [10.0, 176.0], [10.1, 176.0], [10.2, 176.0], [10.3, 176.0], [10.4, 176.0], [10.5, 176.0], [10.6, 176.0], [10.7, 176.0], [10.8, 176.0], [10.9, 176.0], [11.0, 176.0], [11.1, 176.0], [11.2, 176.0], [11.3, 176.0], [11.4, 176.0], [11.5, 176.0], [11.6, 176.0], [11.7, 176.0], [11.8, 176.0], [11.9, 176.0], [12.0, 176.0], [12.1, 176.0], [12.2, 176.0], [12.3, 176.0], [12.4, 176.0], [12.5, 176.0], [12.6, 176.0], [12.7, 176.0], [12.8, 176.0], [12.9, 176.0], [13.0, 176.0], [13.1, 176.0], [13.2, 176.0], [13.3, 176.0], [13.4, 176.0], [13.5, 176.0], [13.6, 176.0], [13.7, 176.0], [13.8, 176.0], [13.9, 176.0], [14.0, 176.0], [14.1, 176.0], [14.2, 176.0], [14.3, 176.0], [14.4, 176.0], [14.5, 176.0], [14.6, 176.0], [14.7, 176.0], [14.8, 176.0], [14.9, 176.0], [15.0, 176.0], [15.1, 176.0], [15.2, 176.0], [15.3, 176.0], [15.4, 176.0], [15.5, 176.0], [15.6, 176.0], [15.7, 176.0], [15.8, 176.0], [15.9, 176.0], [16.0, 176.0], [16.1, 176.0], [16.2, 176.0], [16.3, 176.0], [16.4, 176.0], [16.5, 176.0], [16.6, 176.0], [16.7, 176.0], [16.8, 176.0], [16.9, 176.0], [17.0, 177.0], [17.1, 177.0], [17.2, 177.0], [17.3, 177.0], [17.4, 177.0], [17.5, 177.0], [17.6, 177.0], [17.7, 177.0], [17.8, 177.0], [17.9, 177.0], [18.0, 177.0], [18.1, 177.0], [18.2, 177.0], [18.3, 177.0], [18.4, 177.0], [18.5, 177.0], [18.6, 177.0], [18.7, 177.0], [18.8, 177.0], [18.9, 177.0], [19.0, 177.0], [19.1, 177.0], [19.2, 177.0], [19.3, 177.0], [19.4, 177.0], [19.5, 177.0], [19.6, 177.0], [19.7, 177.0], [19.8, 177.0], [19.9, 177.0], [20.0, 177.0], [20.1, 177.0], [20.2, 177.0], [20.3, 177.0], [20.4, 177.0], [20.5, 177.0], [20.6, 177.0], [20.7, 177.0], [20.8, 177.0], [20.9, 177.0], [21.0, 177.0], [21.1, 177.0], [21.2, 177.0], [21.3, 177.0], [21.4, 177.0], [21.5, 177.0], [21.6, 177.0], [21.7, 177.0], [21.8, 177.0], [21.9, 177.0], [22.0, 177.0], [22.1, 177.0], [22.2, 177.0], [22.3, 177.0], [22.4, 177.0], [22.5, 177.0], [22.6, 177.0], [22.7, 177.0], [22.8, 177.0], [22.9, 177.0], [23.0, 178.0], [23.1, 178.0], [23.2, 178.0], [23.3, 178.0], [23.4, 178.0], [23.5, 178.0], [23.6, 178.0], [23.7, 178.0], [23.8, 178.0], [23.9, 178.0], [24.0, 178.0], [24.1, 178.0], [24.2, 178.0], [24.3, 178.0], [24.4, 178.0], [24.5, 178.0], [24.6, 178.0], [24.7, 178.0], [24.8, 178.0], [24.9, 178.0], [25.0, 178.0], [25.1, 178.0], [25.2, 178.0], [25.3, 178.0], [25.4, 178.0], [25.5, 178.0], [25.6, 178.0], [25.7, 178.0], [25.8, 178.0], [25.9, 178.0], [26.0, 178.0], [26.1, 178.0], [26.2, 178.0], [26.3, 178.0], [26.4, 178.0], [26.5, 178.0], [26.6, 178.0], [26.7, 178.0], [26.8, 178.0], [26.9, 178.0], [27.0, 178.0], [27.1, 178.0], [27.2, 178.0], [27.3, 178.0], [27.4, 178.0], [27.5, 179.0], [27.6, 179.0], [27.7, 179.0], [27.8, 179.0], [27.9, 179.0], [28.0, 179.0], [28.1, 179.0], [28.2, 179.0], [28.3, 179.0], [28.4, 179.0], [28.5, 179.0], [28.6, 179.0], [28.7, 179.0], [28.8, 179.0], [28.9, 179.0], [29.0, 179.0], [29.1, 179.0], [29.2, 179.0], [29.3, 179.0], [29.4, 179.0], [29.5, 180.0], [29.6, 180.0], [29.7, 180.0], [29.8, 180.0], [29.9, 180.0], [30.0, 180.0], [30.1, 180.0], [30.2, 180.0], [30.3, 180.0], [30.4, 180.0], [30.5, 180.0], [30.6, 180.0], [30.7, 180.0], [30.8, 180.0], [30.9, 180.0], [31.0, 180.0], [31.1, 180.0], [31.2, 180.0], [31.3, 180.0], [31.4, 180.0], [31.5, 181.0], [31.6, 181.0], [31.7, 181.0], [31.8, 181.0], [31.9, 181.0], [32.0, 181.0], [32.1, 181.0], [32.2, 181.0], [32.3, 181.0], [32.4, 181.0], [32.5, 181.0], [32.6, 181.0], [32.7, 181.0], [32.8, 181.0], [32.9, 181.0], [33.0, 181.0], [33.1, 181.0], [33.2, 181.0], [33.3, 181.0], [33.4, 181.0], [33.5, 181.0], [33.6, 181.0], [33.7, 181.0], [33.8, 181.0], [33.9, 181.0], [34.0, 181.0], [34.1, 181.0], [34.2, 181.0], [34.3, 181.0], [34.4, 181.0], [34.5, 181.0], [34.6, 181.0], [34.7, 181.0], [34.8, 181.0], [34.9, 181.0], [35.0, 182.0], [35.1, 182.0], [35.2, 182.0], [35.3, 182.0], [35.4, 182.0], [35.5, 182.0], [35.6, 182.0], [35.7, 182.0], [35.8, 182.0], [35.9, 182.0], [36.0, 182.0], [36.1, 182.0], [36.2, 182.0], [36.3, 182.0], [36.4, 182.0], [36.5, 183.0], [36.6, 183.0], [36.7, 183.0], [36.8, 183.0], [36.9, 183.0], [37.0, 183.0], [37.1, 183.0], [37.2, 183.0], [37.3, 183.0], [37.4, 183.0], [37.5, 183.0], [37.6, 183.0], [37.7, 183.0], [37.8, 183.0], [37.9, 183.0], [38.0, 183.0], [38.1, 183.0], [38.2, 183.0], [38.3, 183.0], [38.4, 183.0], [38.5, 184.0], [38.6, 184.0], [38.7, 184.0], [38.8, 184.0], [38.9, 184.0], [39.0, 184.0], [39.1, 184.0], [39.2, 184.0], [39.3, 184.0], [39.4, 184.0], [39.5, 184.0], [39.6, 184.0], [39.7, 184.0], [39.8, 184.0], [39.9, 184.0], [40.0, 184.0], [40.1, 184.0], [40.2, 184.0], [40.3, 184.0], [40.4, 184.0], [40.5, 184.0], [40.6, 184.0], [40.7, 184.0], [40.8, 184.0], [40.9, 184.0], [41.0, 184.0], [41.1, 184.0], [41.2, 184.0], [41.3, 184.0], [41.4, 184.0], [41.5, 185.0], [41.6, 185.0], [41.7, 185.0], [41.8, 185.0], [41.9, 185.0], [42.0, 186.0], [42.1, 186.0], [42.2, 186.0], [42.3, 186.0], [42.4, 186.0], [42.5, 186.0], [42.6, 186.0], [42.7, 186.0], [42.8, 186.0], [42.9, 186.0], [43.0, 186.0], [43.1, 186.0], [43.2, 186.0], [43.3, 186.0], [43.4, 186.0], [43.5, 186.0], [43.6, 186.0], [43.7, 186.0], [43.8, 186.0], [43.9, 186.0], [44.0, 187.0], [44.1, 187.0], [44.2, 187.0], [44.3, 187.0], [44.4, 187.0], [44.5, 187.0], [44.6, 187.0], [44.7, 187.0], [44.8, 187.0], [44.9, 187.0], [45.0, 188.0], [45.1, 188.0], [45.2, 188.0], [45.3, 188.0], [45.4, 188.0], [45.5, 188.0], [45.6, 188.0], [45.7, 188.0], [45.8, 188.0], [45.9, 188.0], [46.0, 188.0], [46.1, 188.0], [46.2, 188.0], [46.3, 188.0], [46.4, 188.0], [46.5, 188.0], [46.6, 188.0], [46.7, 188.0], [46.8, 188.0], [46.9, 188.0], [47.0, 188.0], [47.1, 188.0], [47.2, 188.0], [47.3, 188.0], [47.4, 188.0], [47.5, 188.0], [47.6, 188.0], [47.7, 188.0], [47.8, 188.0], [47.9, 188.0], [48.0, 189.0], [48.1, 189.0], [48.2, 189.0], [48.3, 189.0], [48.4, 189.0], [48.5, 189.0], [48.6, 189.0], [48.7, 189.0], [48.8, 189.0], [48.9, 189.0], [49.0, 189.0], [49.1, 189.0], [49.2, 189.0], [49.3, 189.0], [49.4, 189.0], [49.5, 189.0], [49.6, 189.0], [49.7, 189.0], [49.8, 189.0], [49.9, 189.0], [50.0, 189.0], [50.1, 189.0], [50.2, 189.0], [50.3, 189.0], [50.4, 189.0], [50.5, 189.0], [50.6, 189.0], [50.7, 189.0], [50.8, 189.0], [50.9, 189.0], [51.0, 190.0], [51.1, 190.0], [51.2, 190.0], [51.3, 190.0], [51.4, 190.0], [51.5, 190.0], [51.6, 190.0], [51.7, 190.0], [51.8, 190.0], [51.9, 190.0], [52.0, 190.0], [52.1, 190.0], [52.2, 190.0], [52.3, 190.0], [52.4, 190.0], [52.5, 190.0], [52.6, 190.0], [52.7, 190.0], [52.8, 190.0], [52.9, 190.0], [53.0, 191.0], [53.1, 191.0], [53.2, 191.0], [53.3, 191.0], [53.4, 191.0], [53.5, 191.0], [53.6, 191.0], [53.7, 191.0], [53.8, 191.0], [53.9, 191.0], [54.0, 191.0], [54.1, 191.0], [54.2, 191.0], [54.3, 191.0], [54.4, 191.0], [54.5, 191.0], [54.6, 191.0], [54.7, 191.0], [54.8, 191.0], [54.9, 191.0], [55.0, 192.0], [55.1, 192.0], [55.2, 192.0], [55.3, 192.0], [55.4, 192.0], [55.5, 192.0], [55.6, 192.0], [55.7, 192.0], [55.8, 192.0], [55.9, 192.0], [56.0, 192.0], [56.1, 192.0], [56.2, 192.0], [56.3, 192.0], [56.4, 192.0], [56.5, 193.0], [56.6, 193.0], [56.7, 193.0], [56.8, 193.0], [56.9, 193.0], [57.0, 193.0], [57.1, 193.0], [57.2, 193.0], [57.3, 193.0], [57.4, 193.0], [57.5, 193.0], [57.6, 193.0], [57.7, 193.0], [57.8, 193.0], [57.9, 193.0], [58.0, 193.0], [58.1, 193.0], [58.2, 193.0], [58.3, 193.0], [58.4, 193.0], [58.5, 193.0], [58.6, 193.0], [58.7, 193.0], [58.8, 193.0], [58.9, 193.0], [59.0, 193.0], [59.1, 193.0], [59.2, 193.0], [59.3, 193.0], [59.4, 193.0], [59.5, 194.0], [59.6, 194.0], [59.7, 194.0], [59.8, 194.0], [59.9, 194.0], [60.0, 195.0], [60.1, 195.0], [60.2, 195.0], [60.3, 195.0], [60.4, 195.0], [60.5, 195.0], [60.6, 195.0], [60.7, 195.0], [60.8, 195.0], [60.9, 195.0], [61.0, 195.0], [61.1, 195.0], [61.2, 195.0], [61.3, 195.0], [61.4, 195.0], [61.5, 195.0], [61.6, 195.0], [61.7, 195.0], [61.8, 195.0], [61.9, 195.0], [62.0, 195.0], [62.1, 195.0], [62.2, 195.0], [62.3, 195.0], [62.4, 195.0], [62.5, 196.0], [62.6, 196.0], [62.7, 196.0], [62.8, 196.0], [62.9, 196.0], [63.0, 197.0], [63.1, 197.0], [63.2, 197.0], [63.3, 197.0], [63.4, 197.0], [63.5, 197.0], [63.6, 197.0], [63.7, 197.0], [63.8, 197.0], [63.9, 197.0], [64.0, 198.0], [64.1, 198.0], [64.2, 198.0], [64.3, 198.0], [64.4, 198.0], [64.5, 198.0], [64.6, 198.0], [64.7, 198.0], [64.8, 198.0], [64.9, 198.0], [65.0, 199.0], [65.1, 199.0], [65.2, 199.0], [65.3, 199.0], [65.4, 199.0], [65.5, 200.0], [65.6, 200.0], [65.7, 200.0], [65.8, 200.0], [65.9, 200.0], [66.0, 200.0], [66.1, 200.0], [66.2, 200.0], [66.3, 200.0], [66.4, 200.0], [66.5, 201.0], [66.6, 201.0], [66.7, 201.0], [66.8, 201.0], [66.9, 201.0], [67.0, 201.0], [67.1, 201.0], [67.2, 201.0], [67.3, 201.0], [67.4, 201.0], [67.5, 201.0], [67.6, 201.0], [67.7, 201.0], [67.8, 201.0], [67.9, 201.0], [68.0, 201.0], [68.1, 201.0], [68.2, 201.0], [68.3, 201.0], [68.4, 201.0], [68.5, 201.0], [68.6, 201.0], [68.7, 201.0], [68.8, 201.0], [68.9, 201.0], [69.0, 201.0], [69.1, 201.0], [69.2, 201.0], [69.3, 201.0], [69.4, 201.0], [69.5, 202.0], [69.6, 202.0], [69.7, 202.0], [69.8, 202.0], [69.9, 202.0], [70.0, 202.0], [70.1, 202.0], [70.2, 202.0], [70.3, 202.0], [70.4, 202.0], [70.5, 202.0], [70.6, 202.0], [70.7, 202.0], [70.8, 202.0], [70.9, 202.0], [71.0, 203.0], [71.1, 203.0], [71.2, 203.0], [71.3, 203.0], [71.4, 203.0], [71.5, 203.0], [71.6, 203.0], [71.7, 203.0], [71.8, 203.0], [71.9, 203.0], [72.0, 203.0], [72.1, 203.0], [72.2, 203.0], [72.3, 203.0], [72.4, 203.0], [72.5, 204.0], [72.6, 204.0], [72.7, 204.0], [72.8, 204.0], [72.9, 204.0], [73.0, 205.0], [73.1, 205.0], [73.2, 205.0], [73.3, 205.0], [73.4, 205.0], [73.5, 205.0], [73.6, 205.0], [73.7, 205.0], [73.8, 205.0], [73.9, 205.0], [74.0, 206.0], [74.1, 206.0], [74.2, 206.0], [74.3, 206.0], [74.4, 206.0], [74.5, 207.0], [74.6, 207.0], [74.7, 207.0], [74.8, 207.0], [74.9, 207.0], [75.0, 207.0], [75.1, 207.0], [75.2, 207.0], [75.3, 207.0], [75.4, 207.0], [75.5, 209.0], [75.6, 209.0], [75.7, 209.0], [75.8, 209.0], [75.9, 209.0], [76.0, 211.0], [76.1, 211.0], [76.2, 211.0], [76.3, 211.0], [76.4, 211.0], [76.5, 211.0], [76.6, 211.0], [76.7, 211.0], [76.8, 211.0], [76.9, 211.0], [77.0, 211.0], [77.1, 211.0], [77.2, 211.0], [77.3, 211.0], [77.4, 211.0], [77.5, 214.0], [77.6, 214.0], [77.7, 214.0], [77.8, 214.0], [77.9, 214.0], [78.0, 215.0], [78.1, 215.0], [78.2, 215.0], [78.3, 215.0], [78.4, 215.0], [78.5, 215.0], [78.6, 215.0], [78.7, 215.0], [78.8, 215.0], [78.9, 215.0], [79.0, 216.0], [79.1, 216.0], [79.2, 216.0], [79.3, 216.0], [79.4, 216.0], [79.5, 217.0], [79.6, 217.0], [79.7, 217.0], [79.8, 217.0], [79.9, 217.0], [80.0, 217.0], [80.1, 217.0], [80.2, 217.0], [80.3, 217.0], [80.4, 217.0], [80.5, 221.0], [80.6, 221.0], [80.7, 221.0], [80.8, 221.0], [80.9, 221.0], [81.0, 222.0], [81.1, 222.0], [81.2, 222.0], [81.3, 222.0], [81.4, 222.0], [81.5, 224.0], [81.6, 224.0], [81.7, 224.0], [81.8, 224.0], [81.9, 224.0], [82.0, 224.0], [82.1, 224.0], [82.2, 224.0], [82.3, 224.0], [82.4, 224.0], [82.5, 225.0], [82.6, 225.0], [82.7, 225.0], [82.8, 225.0], [82.9, 225.0], [83.0, 229.0], [83.1, 229.0], [83.2, 229.0], [83.3, 229.0], [83.4, 229.0], [83.5, 230.0], [83.6, 230.0], [83.7, 230.0], [83.8, 230.0], [83.9, 230.0], [84.0, 231.0], [84.1, 231.0], [84.2, 231.0], [84.3, 231.0], [84.4, 231.0], [84.5, 240.0], [84.6, 240.0], [84.7, 240.0], [84.8, 240.0], [84.9, 240.0], [85.0, 253.0], [85.1, 253.0], [85.2, 253.0], [85.3, 253.0], [85.4, 253.0], [85.5, 254.0], [85.6, 254.0], [85.7, 254.0], [85.8, 254.0], [85.9, 254.0], [86.0, 255.0], [86.1, 255.0], [86.2, 255.0], [86.3, 255.0], [86.4, 255.0], [86.5, 260.0], [86.6, 260.0], [86.7, 260.0], [86.8, 260.0], [86.9, 260.0], [87.0, 260.0], [87.1, 260.0], [87.2, 260.0], [87.3, 260.0], [87.4, 260.0], [87.5, 262.0], [87.6, 262.0], [87.7, 262.0], [87.8, 262.0], [87.9, 262.0], [88.0, 267.0], [88.1, 267.0], [88.2, 267.0], [88.3, 267.0], [88.4, 267.0], [88.5, 280.0], [88.6, 280.0], [88.7, 280.0], [88.8, 280.0], [88.9, 280.0], [89.0, 399.0], [89.1, 399.0], [89.2, 399.0], [89.3, 399.0], [89.4, 399.0], [89.5, 460.0], [89.6, 460.0], [89.7, 460.0], [89.8, 460.0], [89.9, 460.0], [90.0, 461.0], [90.1, 461.0], [90.2, 461.0], [90.3, 461.0], [90.4, 461.0], [90.5, 469.0], [90.6, 469.0], [90.7, 469.0], [90.8, 469.0], [90.9, 469.0], [91.0, 642.0], [91.1, 642.0], [91.2, 642.0], [91.3, 642.0], [91.4, 642.0], [91.5, 741.0], [91.6, 741.0], [91.7, 741.0], [91.8, 741.0], [91.9, 741.0], [92.0, 872.0], [92.1, 872.0], [92.2, 872.0], [92.3, 872.0], [92.4, 872.0], [92.5, 920.0], [92.6, 920.0], [92.7, 920.0], [92.8, 920.0], [92.9, 920.0], [93.0, 971.0], [93.1, 971.0], [93.2, 971.0], [93.3, 971.0], [93.4, 971.0], [93.5, 1041.0], [93.6, 1041.0], [93.7, 1041.0], [93.8, 1041.0], [93.9, 1041.0], [94.0, 1059.0], [94.1, 1059.0], [94.2, 1059.0], [94.3, 1059.0], [94.4, 1059.0], [94.5, 1231.0], [94.6, 1231.0], [94.7, 1231.0], [94.8, 1231.0], [94.9, 1231.0], [95.0, 1346.0], [95.1, 1346.0], [95.2, 1346.0], [95.3, 1346.0], [95.4, 1346.0], [95.5, 1523.0], [95.6, 1523.0], [95.7, 1523.0], [95.8, 1523.0], [95.9, 1523.0], [96.0, 1561.0], [96.1, 1561.0], [96.2, 1561.0], [96.3, 1561.0], [96.4, 1561.0], [96.5, 1623.0], [96.6, 1623.0], [96.7, 1623.0], [96.8, 1623.0], [96.9, 1623.0], [97.0, 1709.0], [97.1, 1709.0], [97.2, 1709.0], [97.3, 1709.0], [97.4, 1709.0], [97.5, 1868.0], [97.6, 1868.0], [97.7, 1868.0], [97.8, 1868.0], [97.9, 1868.0], [98.0, 1897.0], [98.1, 1897.0], [98.2, 1897.0], [98.3, 1897.0], [98.4, 1897.0], [98.5, 1974.0], [98.6, 1974.0], [98.7, 1974.0], [98.8, 1974.0], [98.9, 1974.0], [99.0, 2004.0], [99.1, 2004.0], [99.2, 2004.0], [99.3, 2004.0], [99.4, 2004.0], [99.5, 2089.0], [99.6, 2089.0], [99.7, 2089.0], [99.8, 2089.0], [99.9, 2089.0]], "isOverall": false, "label": "Get User Request with Basic Auth", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 131.0, "series": [{"data": [[600.0, 1.0], [700.0, 1.0], [800.0, 1.0], [200.0, 47.0], [900.0, 2.0], [1000.0, 2.0], [300.0, 1.0], [1200.0, 1.0], [1300.0, 1.0], [1500.0, 2.0], [400.0, 3.0], [1600.0, 1.0], [100.0, 131.0], [1700.0, 1.0], [1800.0, 2.0], [1900.0, 1.0], [2000.0, 2.0]], "isOverall": false, "label": "Get User Request with Basic Auth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2000.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 9.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 182.0, "series": [{"data": [[0.0, 182.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 9.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 9.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 2.017857142857143, "minX": 1.72816344E12, "maxY": 4.87, "series": [{"data": [[1.72816854E12, 2.1363636363636362], [1.72816344E12, 4.87], [1.7281686E12, 2.017857142857143]], "isOverall": false, "label": "PT-008 Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7281686E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 183.13114754098365, "minX": 1.0, "maxY": 1974.0, "series": [{"data": [[8.0, 1133.5], [2.0, 183.13114754098365], [9.0, 460.0], [10.0, 741.0], [11.0, 903.5], [3.0, 210.35416666666666], [13.0, 1310.0], [14.0, 757.0], [15.0, 469.0], [16.0, 1523.0], [4.0, 385.1428571428571], [1.0, 184.0], [17.0, 1041.0], [18.0, 1709.0], [19.0, 1897.0], [20.0, 1462.0], [5.0, 1623.0], [21.0, 1974.0], [7.0, 1530.0]], "isOverall": false, "label": "Get User Request with Basic Auth", "isController": false}, {"data": [[3.4700000000000006, 305.66]], "isOverall": false, "label": "Get User Request with Basic Auth-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 21.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 239.16666666666666, "minX": 1.72816344E12, "maxY": 3151.3333333333335, "series": [{"data": [[1.72816854E12, 1391.8666666666666], [1.72816344E12, 3151.3333333333335], [1.7281686E12, 1771.4666666666667]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72816854E12, 239.16666666666666], [1.72816344E12, 540.2], [1.7281686E12, 302.5]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7281686E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 179.6071428571429, "minX": 1.72816344E12, "maxY": 429.7699999999999, "series": [{"data": [[1.72816854E12, 184.02272727272728], [1.72816344E12, 429.7699999999999], [1.7281686E12, 179.6071428571429]], "isOverall": false, "label": "Get User Request with Basic Auth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7281686E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 179.57142857142858, "minX": 1.72816344E12, "maxY": 425.59999999999997, "series": [{"data": [[1.72816854E12, 184.0], [1.72816344E12, 425.59999999999997], [1.7281686E12, 179.57142857142858]], "isOverall": false, "label": "Get User Request with Basic Auth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7281686E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 113.625, "minX": 1.72816344E12, "maxY": 306.03, "series": [{"data": [[1.72816854E12, 117.72727272727272], [1.72816344E12, 306.03], [1.7281686E12, 113.625]], "isOverall": false, "label": "Get User Request with Basic Auth", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7281686E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 173.0, "minX": 1.72816344E12, "maxY": 2089.0, "series": [{"data": [[1.72816854E12, 254.0], [1.72816344E12, 2089.0], [1.7281686E12, 201.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72816854E12, 173.0], [1.72816344E12, 180.0], [1.7281686E12, 173.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72816854E12, 202.0], [1.72816344E12, 1334.5000000000007], [1.7281686E12, 186.3]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72816854E12, 254.0], [1.72816344E12, 2088.1499999999996], [1.7281686E12, 201.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72816854E12, 178.0], [1.72816344E12, 205.5], [1.7281686E12, 177.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.72816854E12, 206.25], [1.72816344E12, 1860.0499999999981], [1.7281686E12, 189.15]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7281686E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 177.0, "minX": 3.0, "maxY": 1050.0, "series": [{"data": [[9.0, 177.0], [20.0, 1050.0], [10.0, 188.5], [11.0, 181.0], [12.0, 228.5], [3.0, 194.0], [6.0, 178.5], [7.0, 200.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 177.0, "minX": 3.0, "maxY": 1050.0, "series": [{"data": [[9.0, 177.0], [20.0, 1050.0], [10.0, 188.5], [11.0, 181.0], [12.0, 228.5], [3.0, 194.0], [6.0, 178.5], [7.0, 200.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 0.75, "minX": 1.72816344E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.72816854E12, 0.75], [1.72816344E12, 1.6666666666666667], [1.7281686E12, 0.9166666666666666]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7281686E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.72816344E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.72816854E12, 0.7333333333333333], [1.72816344E12, 1.6666666666666667], [1.7281686E12, 0.9333333333333333]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7281686E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.72816344E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.72816854E12, 0.7333333333333333], [1.72816344E12, 1.6666666666666667], [1.7281686E12, 0.9333333333333333]], "isOverall": false, "label": "Get User Request with Basic Auth-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7281686E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 0.7333333333333333, "minX": 1.72816344E12, "maxY": 1.6666666666666667, "series": [{"data": [[1.72816854E12, 0.7333333333333333], [1.72816344E12, 1.6666666666666667], [1.7281686E12, 0.9333333333333333]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7281686E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 10800000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}
