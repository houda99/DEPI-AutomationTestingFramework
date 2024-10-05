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
        data: {"result": {"minY": 173.0, "minX": 0.0, "maxY": 405.0, "series": [{"data": [[0.0, 173.0], [0.1, 173.0], [0.2, 173.0], [0.3, 173.0], [0.4, 173.0], [0.5, 175.0], [0.6, 175.0], [0.7, 175.0], [0.8, 175.0], [0.9, 175.0], [1.0, 175.0], [1.1, 175.0], [1.2, 175.0], [1.3, 175.0], [1.4, 175.0], [1.5, 176.0], [1.6, 176.0], [1.7, 176.0], [1.8, 176.0], [1.9, 176.0], [2.0, 176.0], [2.1, 176.0], [2.2, 176.0], [2.3, 176.0], [2.4, 176.0], [2.5, 176.0], [2.6, 176.0], [2.7, 176.0], [2.8, 176.0], [2.9, 176.0], [3.0, 177.0], [3.1, 177.0], [3.2, 177.0], [3.3, 177.0], [3.4, 177.0], [3.5, 177.0], [3.6, 177.0], [3.7, 177.0], [3.8, 177.0], [3.9, 177.0], [4.0, 177.0], [4.1, 177.0], [4.2, 177.0], [4.3, 177.0], [4.4, 177.0], [4.5, 178.0], [4.6, 178.0], [4.7, 178.0], [4.8, 178.0], [4.9, 178.0], [5.0, 179.0], [5.1, 179.0], [5.2, 179.0], [5.3, 179.0], [5.4, 179.0], [5.5, 179.0], [5.6, 179.0], [5.7, 179.0], [5.8, 179.0], [5.9, 179.0], [6.0, 179.0], [6.1, 179.0], [6.2, 179.0], [6.3, 179.0], [6.4, 179.0], [6.5, 179.0], [6.6, 179.0], [6.7, 179.0], [6.8, 179.0], [6.9, 179.0], [7.0, 179.0], [7.1, 179.0], [7.2, 179.0], [7.3, 179.0], [7.4, 179.0], [7.5, 179.0], [7.6, 179.0], [7.7, 179.0], [7.8, 179.0], [7.9, 179.0], [8.0, 179.0], [8.1, 179.0], [8.2, 179.0], [8.3, 179.0], [8.4, 179.0], [8.5, 179.0], [8.6, 179.0], [8.7, 179.0], [8.8, 179.0], [8.9, 179.0], [9.0, 180.0], [9.1, 180.0], [9.2, 180.0], [9.3, 180.0], [9.4, 180.0], [9.5, 180.0], [9.6, 180.0], [9.7, 180.0], [9.8, 180.0], [9.9, 180.0], [10.0, 180.0], [10.1, 180.0], [10.2, 180.0], [10.3, 180.0], [10.4, 180.0], [10.5, 180.0], [10.6, 180.0], [10.7, 180.0], [10.8, 180.0], [10.9, 180.0], [11.0, 180.0], [11.1, 180.0], [11.2, 180.0], [11.3, 180.0], [11.4, 180.0], [11.5, 180.0], [11.6, 180.0], [11.7, 180.0], [11.8, 180.0], [11.9, 180.0], [12.0, 180.0], [12.1, 180.0], [12.2, 180.0], [12.3, 180.0], [12.4, 180.0], [12.5, 180.0], [12.6, 180.0], [12.7, 180.0], [12.8, 180.0], [12.9, 180.0], [13.0, 180.0], [13.1, 180.0], [13.2, 180.0], [13.3, 180.0], [13.4, 180.0], [13.5, 180.0], [13.6, 180.0], [13.7, 180.0], [13.8, 180.0], [13.9, 180.0], [14.0, 181.0], [14.1, 181.0], [14.2, 181.0], [14.3, 181.0], [14.4, 181.0], [14.5, 181.0], [14.6, 181.0], [14.7, 181.0], [14.8, 181.0], [14.9, 181.0], [15.0, 181.0], [15.1, 181.0], [15.2, 181.0], [15.3, 181.0], [15.4, 181.0], [15.5, 181.0], [15.6, 181.0], [15.7, 181.0], [15.8, 181.0], [15.9, 181.0], [16.0, 181.0], [16.1, 181.0], [16.2, 181.0], [16.3, 181.0], [16.4, 181.0], [16.5, 182.0], [16.6, 182.0], [16.7, 182.0], [16.8, 182.0], [16.9, 182.0], [17.0, 182.0], [17.1, 182.0], [17.2, 182.0], [17.3, 182.0], [17.4, 182.0], [17.5, 182.0], [17.6, 182.0], [17.7, 182.0], [17.8, 182.0], [17.9, 182.0], [18.0, 182.0], [18.1, 182.0], [18.2, 182.0], [18.3, 182.0], [18.4, 182.0], [18.5, 183.0], [18.6, 183.0], [18.7, 183.0], [18.8, 183.0], [18.9, 183.0], [19.0, 183.0], [19.1, 183.0], [19.2, 183.0], [19.3, 183.0], [19.4, 183.0], [19.5, 183.0], [19.6, 183.0], [19.7, 183.0], [19.8, 183.0], [19.9, 183.0], [20.0, 183.0], [20.1, 183.0], [20.2, 183.0], [20.3, 183.0], [20.4, 183.0], [20.5, 184.0], [20.6, 184.0], [20.7, 184.0], [20.8, 184.0], [20.9, 184.0], [21.0, 184.0], [21.1, 184.0], [21.2, 184.0], [21.3, 184.0], [21.4, 184.0], [21.5, 184.0], [21.6, 184.0], [21.7, 184.0], [21.8, 184.0], [21.9, 184.0], [22.0, 184.0], [22.1, 184.0], [22.2, 184.0], [22.3, 184.0], [22.4, 184.0], [22.5, 184.0], [22.6, 184.0], [22.7, 184.0], [22.8, 184.0], [22.9, 184.0], [23.0, 184.0], [23.1, 184.0], [23.2, 184.0], [23.3, 184.0], [23.4, 184.0], [23.5, 185.0], [23.6, 185.0], [23.7, 185.0], [23.8, 185.0], [23.9, 185.0], [24.0, 185.0], [24.1, 185.0], [24.2, 185.0], [24.3, 185.0], [24.4, 185.0], [24.5, 187.0], [24.6, 187.0], [24.7, 187.0], [24.8, 187.0], [24.9, 187.0], [25.0, 187.0], [25.1, 187.0], [25.2, 187.0], [25.3, 187.0], [25.4, 187.0], [25.5, 187.0], [25.6, 187.0], [25.7, 187.0], [25.8, 187.0], [25.9, 187.0], [26.0, 187.0], [26.1, 187.0], [26.2, 187.0], [26.3, 187.0], [26.4, 187.0], [26.5, 188.0], [26.6, 188.0], [26.7, 188.0], [26.8, 188.0], [26.9, 188.0], [27.0, 188.0], [27.1, 188.0], [27.2, 188.0], [27.3, 188.0], [27.4, 188.0], [27.5, 188.0], [27.6, 188.0], [27.7, 188.0], [27.8, 188.0], [27.9, 188.0], [28.0, 188.0], [28.1, 188.0], [28.2, 188.0], [28.3, 188.0], [28.4, 188.0], [28.5, 188.0], [28.6, 188.0], [28.7, 188.0], [28.8, 188.0], [28.9, 188.0], [29.0, 189.0], [29.1, 189.0], [29.2, 189.0], [29.3, 189.0], [29.4, 189.0], [29.5, 189.0], [29.6, 189.0], [29.7, 189.0], [29.8, 189.0], [29.9, 189.0], [30.0, 189.0], [30.1, 189.0], [30.2, 189.0], [30.3, 189.0], [30.4, 189.0], [30.5, 189.0], [30.6, 189.0], [30.7, 189.0], [30.8, 189.0], [30.9, 189.0], [31.0, 189.0], [31.1, 189.0], [31.2, 189.0], [31.3, 189.0], [31.4, 189.0], [31.5, 190.0], [31.6, 190.0], [31.7, 190.0], [31.8, 190.0], [31.9, 190.0], [32.0, 190.0], [32.1, 190.0], [32.2, 190.0], [32.3, 190.0], [32.4, 190.0], [32.5, 190.0], [32.6, 190.0], [32.7, 190.0], [32.8, 190.0], [32.9, 190.0], [33.0, 190.0], [33.1, 190.0], [33.2, 190.0], [33.3, 190.0], [33.4, 190.0], [33.5, 190.0], [33.6, 190.0], [33.7, 190.0], [33.8, 190.0], [33.9, 190.0], [34.0, 191.0], [34.1, 191.0], [34.2, 191.0], [34.3, 191.0], [34.4, 191.0], [34.5, 191.0], [34.6, 191.0], [34.7, 191.0], [34.8, 191.0], [34.9, 191.0], [35.0, 191.0], [35.1, 191.0], [35.2, 191.0], [35.3, 191.0], [35.4, 191.0], [35.5, 191.0], [35.6, 191.0], [35.7, 191.0], [35.8, 191.0], [35.9, 191.0], [36.0, 191.0], [36.1, 191.0], [36.2, 191.0], [36.3, 191.0], [36.4, 191.0], [36.5, 191.0], [36.6, 191.0], [36.7, 191.0], [36.8, 191.0], [36.9, 191.0], [37.0, 191.0], [37.1, 191.0], [37.2, 191.0], [37.3, 191.0], [37.4, 191.0], [37.5, 191.0], [37.6, 191.0], [37.7, 191.0], [37.8, 191.0], [37.9, 191.0], [38.0, 192.0], [38.1, 192.0], [38.2, 192.0], [38.3, 192.0], [38.4, 192.0], [38.5, 192.0], [38.6, 192.0], [38.7, 192.0], [38.8, 192.0], [38.9, 192.0], [39.0, 192.0], [39.1, 192.0], [39.2, 192.0], [39.3, 192.0], [39.4, 192.0], [39.5, 192.0], [39.6, 192.0], [39.7, 192.0], [39.8, 192.0], [39.9, 192.0], [40.0, 193.0], [40.1, 193.0], [40.2, 193.0], [40.3, 193.0], [40.4, 193.0], [40.5, 193.0], [40.6, 193.0], [40.7, 193.0], [40.8, 193.0], [40.9, 193.0], [41.0, 193.0], [41.1, 193.0], [41.2, 193.0], [41.3, 193.0], [41.4, 193.0], [41.5, 193.0], [41.6, 193.0], [41.7, 193.0], [41.8, 193.0], [41.9, 193.0], [42.0, 193.0], [42.1, 193.0], [42.2, 193.0], [42.3, 193.0], [42.4, 193.0], [42.5, 193.0], [42.6, 193.0], [42.7, 193.0], [42.8, 193.0], [42.9, 193.0], [43.0, 193.0], [43.1, 193.0], [43.2, 193.0], [43.3, 193.0], [43.4, 193.0], [43.5, 193.0], [43.6, 193.0], [43.7, 193.0], [43.8, 193.0], [43.9, 193.0], [44.0, 194.0], [44.1, 194.0], [44.2, 194.0], [44.3, 194.0], [44.4, 194.0], [44.5, 194.0], [44.6, 194.0], [44.7, 194.0], [44.8, 194.0], [44.9, 194.0], [45.0, 194.0], [45.1, 194.0], [45.2, 194.0], [45.3, 194.0], [45.4, 194.0], [45.5, 194.0], [45.6, 194.0], [45.7, 194.0], [45.8, 194.0], [45.9, 194.0], [46.0, 195.0], [46.1, 195.0], [46.2, 195.0], [46.3, 195.0], [46.4, 195.0], [46.5, 195.0], [46.6, 195.0], [46.7, 195.0], [46.8, 195.0], [46.9, 195.0], [47.0, 195.0], [47.1, 195.0], [47.2, 195.0], [47.3, 195.0], [47.4, 195.0], [47.5, 196.0], [47.6, 196.0], [47.7, 196.0], [47.8, 196.0], [47.9, 196.0], [48.0, 196.0], [48.1, 196.0], [48.2, 196.0], [48.3, 196.0], [48.4, 196.0], [48.5, 196.0], [48.6, 196.0], [48.7, 196.0], [48.8, 196.0], [48.9, 196.0], [49.0, 196.0], [49.1, 196.0], [49.2, 196.0], [49.3, 196.0], [49.4, 196.0], [49.5, 197.0], [49.6, 197.0], [49.7, 197.0], [49.8, 197.0], [49.9, 197.0], [50.0, 197.0], [50.1, 197.0], [50.2, 197.0], [50.3, 197.0], [50.4, 197.0], [50.5, 197.0], [50.6, 197.0], [50.7, 197.0], [50.8, 197.0], [50.9, 197.0], [51.0, 197.0], [51.1, 197.0], [51.2, 197.0], [51.3, 197.0], [51.4, 197.0], [51.5, 198.0], [51.6, 198.0], [51.7, 198.0], [51.8, 198.0], [51.9, 198.0], [52.0, 199.0], [52.1, 199.0], [52.2, 199.0], [52.3, 199.0], [52.4, 199.0], [52.5, 199.0], [52.6, 199.0], [52.7, 199.0], [52.8, 199.0], [52.9, 199.0], [53.0, 199.0], [53.1, 199.0], [53.2, 199.0], [53.3, 199.0], [53.4, 199.0], [53.5, 199.0], [53.6, 199.0], [53.7, 199.0], [53.8, 199.0], [53.9, 199.0], [54.0, 199.0], [54.1, 199.0], [54.2, 199.0], [54.3, 199.0], [54.4, 199.0], [54.5, 199.0], [54.6, 199.0], [54.7, 199.0], [54.8, 199.0], [54.9, 199.0], [55.0, 200.0], [55.1, 200.0], [55.2, 200.0], [55.3, 200.0], [55.4, 200.0], [55.5, 201.0], [55.6, 201.0], [55.7, 201.0], [55.8, 201.0], [55.9, 201.0], [56.0, 202.0], [56.1, 202.0], [56.2, 202.0], [56.3, 202.0], [56.4, 202.0], [56.5, 202.0], [56.6, 202.0], [56.7, 202.0], [56.8, 202.0], [56.9, 202.0], [57.0, 203.0], [57.1, 203.0], [57.2, 203.0], [57.3, 203.0], [57.4, 203.0], [57.5, 203.0], [57.6, 203.0], [57.7, 203.0], [57.8, 203.0], [57.9, 203.0], [58.0, 203.0], [58.1, 203.0], [58.2, 203.0], [58.3, 203.0], [58.4, 203.0], [58.5, 203.0], [58.6, 203.0], [58.7, 203.0], [58.8, 203.0], [58.9, 203.0], [59.0, 204.0], [59.1, 204.0], [59.2, 204.0], [59.3, 204.0], [59.4, 204.0], [59.5, 204.0], [59.6, 204.0], [59.7, 204.0], [59.8, 204.0], [59.9, 204.0], [60.0, 204.0], [60.1, 204.0], [60.2, 204.0], [60.3, 204.0], [60.4, 204.0], [60.5, 204.0], [60.6, 204.0], [60.7, 204.0], [60.8, 204.0], [60.9, 204.0], [61.0, 205.0], [61.1, 205.0], [61.2, 205.0], [61.3, 205.0], [61.4, 205.0], [61.5, 205.0], [61.6, 205.0], [61.7, 205.0], [61.8, 205.0], [61.9, 205.0], [62.0, 205.0], [62.1, 205.0], [62.2, 205.0], [62.3, 205.0], [62.4, 205.0], [62.5, 205.0], [62.6, 205.0], [62.7, 205.0], [62.8, 205.0], [62.9, 205.0], [63.0, 205.0], [63.1, 205.0], [63.2, 205.0], [63.3, 205.0], [63.4, 205.0], [63.5, 205.0], [63.6, 205.0], [63.7, 205.0], [63.8, 205.0], [63.9, 205.0], [64.0, 206.0], [64.1, 206.0], [64.2, 206.0], [64.3, 206.0], [64.4, 206.0], [64.5, 207.0], [64.6, 207.0], [64.7, 207.0], [64.8, 207.0], [64.9, 207.0], [65.0, 208.0], [65.1, 208.0], [65.2, 208.0], [65.3, 208.0], [65.4, 208.0], [65.5, 208.0], [65.6, 208.0], [65.7, 208.0], [65.8, 208.0], [65.9, 208.0], [66.0, 208.0], [66.1, 208.0], [66.2, 208.0], [66.3, 208.0], [66.4, 208.0], [66.5, 208.0], [66.6, 208.0], [66.7, 208.0], [66.8, 208.0], [66.9, 208.0], [67.0, 208.0], [67.1, 208.0], [67.2, 208.0], [67.3, 208.0], [67.4, 208.0], [67.5, 208.0], [67.6, 208.0], [67.7, 208.0], [67.8, 208.0], [67.9, 208.0], [68.0, 208.0], [68.1, 208.0], [68.2, 208.0], [68.3, 208.0], [68.4, 208.0], [68.5, 209.0], [68.6, 209.0], [68.7, 209.0], [68.8, 209.0], [68.9, 209.0], [69.0, 209.0], [69.1, 209.0], [69.2, 209.0], [69.3, 209.0], [69.4, 209.0], [69.5, 209.0], [69.6, 209.0], [69.7, 209.0], [69.8, 209.0], [69.9, 209.0], [70.0, 209.0], [70.1, 209.0], [70.2, 209.0], [70.3, 209.0], [70.4, 209.0], [70.5, 209.0], [70.6, 209.0], [70.7, 209.0], [70.8, 209.0], [70.9, 209.0], [71.0, 209.0], [71.1, 209.0], [71.2, 209.0], [71.3, 209.0], [71.4, 209.0], [71.5, 209.0], [71.6, 209.0], [71.7, 209.0], [71.8, 209.0], [71.9, 209.0], [72.0, 209.0], [72.1, 209.0], [72.2, 209.0], [72.3, 209.0], [72.4, 209.0], [72.5, 210.0], [72.6, 210.0], [72.7, 210.0], [72.8, 210.0], [72.9, 210.0], [73.0, 210.0], [73.1, 210.0], [73.2, 210.0], [73.3, 210.0], [73.4, 210.0], [73.5, 210.0], [73.6, 210.0], [73.7, 210.0], [73.8, 210.0], [73.9, 210.0], [74.0, 210.0], [74.1, 210.0], [74.2, 210.0], [74.3, 210.0], [74.4, 210.0], [74.5, 210.0], [74.6, 210.0], [74.7, 210.0], [74.8, 210.0], [74.9, 210.0], [75.0, 210.0], [75.1, 210.0], [75.2, 210.0], [75.3, 210.0], [75.4, 210.0], [75.5, 211.0], [75.6, 211.0], [75.7, 211.0], [75.8, 211.0], [75.9, 211.0], [76.0, 211.0], [76.1, 211.0], [76.2, 211.0], [76.3, 211.0], [76.4, 211.0], [76.5, 211.0], [76.6, 211.0], [76.7, 211.0], [76.8, 211.0], [76.9, 211.0], [77.0, 211.0], [77.1, 211.0], [77.2, 211.0], [77.3, 211.0], [77.4, 211.0], [77.5, 211.0], [77.6, 211.0], [77.7, 211.0], [77.8, 211.0], [77.9, 211.0], [78.0, 211.0], [78.1, 211.0], [78.2, 211.0], [78.3, 211.0], [78.4, 211.0], [78.5, 212.0], [78.6, 212.0], [78.7, 212.0], [78.8, 212.0], [78.9, 212.0], [79.0, 212.0], [79.1, 212.0], [79.2, 212.0], [79.3, 212.0], [79.4, 212.0], [79.5, 213.0], [79.6, 213.0], [79.7, 213.0], [79.8, 213.0], [79.9, 213.0], [80.0, 213.0], [80.1, 213.0], [80.2, 213.0], [80.3, 213.0], [80.4, 213.0], [80.5, 213.0], [80.6, 213.0], [80.7, 213.0], [80.8, 213.0], [80.9, 213.0], [81.0, 213.0], [81.1, 213.0], [81.2, 213.0], [81.3, 213.0], [81.4, 213.0], [81.5, 213.0], [81.6, 213.0], [81.7, 213.0], [81.8, 213.0], [81.9, 213.0], [82.0, 213.0], [82.1, 213.0], [82.2, 213.0], [82.3, 213.0], [82.4, 213.0], [82.5, 213.0], [82.6, 213.0], [82.7, 213.0], [82.8, 213.0], [82.9, 213.0], [83.0, 213.0], [83.1, 213.0], [83.2, 213.0], [83.3, 213.0], [83.4, 213.0], [83.5, 213.0], [83.6, 213.0], [83.7, 213.0], [83.8, 213.0], [83.9, 213.0], [84.0, 214.0], [84.1, 214.0], [84.2, 214.0], [84.3, 214.0], [84.4, 214.0], [84.5, 214.0], [84.6, 214.0], [84.7, 214.0], [84.8, 214.0], [84.9, 214.0], [85.0, 214.0], [85.1, 214.0], [85.2, 214.0], [85.3, 214.0], [85.4, 214.0], [85.5, 214.0], [85.6, 214.0], [85.7, 214.0], [85.8, 214.0], [85.9, 214.0], [86.0, 214.0], [86.1, 214.0], [86.2, 214.0], [86.3, 214.0], [86.4, 214.0], [86.5, 214.0], [86.6, 214.0], [86.7, 214.0], [86.8, 214.0], [86.9, 214.0], [87.0, 215.0], [87.1, 215.0], [87.2, 215.0], [87.3, 215.0], [87.4, 215.0], [87.5, 215.0], [87.6, 215.0], [87.7, 215.0], [87.8, 215.0], [87.9, 215.0], [88.0, 215.0], [88.1, 215.0], [88.2, 215.0], [88.3, 215.0], [88.4, 215.0], [88.5, 216.0], [88.6, 216.0], [88.7, 216.0], [88.8, 216.0], [88.9, 216.0], [89.0, 216.0], [89.1, 216.0], [89.2, 216.0], [89.3, 216.0], [89.4, 216.0], [89.5, 217.0], [89.6, 217.0], [89.7, 217.0], [89.8, 217.0], [89.9, 217.0], [90.0, 217.0], [90.1, 217.0], [90.2, 217.0], [90.3, 217.0], [90.4, 217.0], [90.5, 217.0], [90.6, 217.0], [90.7, 217.0], [90.8, 217.0], [90.9, 217.0], [91.0, 217.0], [91.1, 217.0], [91.2, 217.0], [91.3, 217.0], [91.4, 217.0], [91.5, 217.0], [91.6, 217.0], [91.7, 217.0], [91.8, 217.0], [91.9, 217.0], [92.0, 217.0], [92.1, 217.0], [92.2, 217.0], [92.3, 217.0], [92.4, 217.0], [92.5, 218.0], [92.6, 218.0], [92.7, 218.0], [92.8, 218.0], [92.9, 218.0], [93.0, 218.0], [93.1, 218.0], [93.2, 218.0], [93.3, 218.0], [93.4, 218.0], [93.5, 219.0], [93.6, 219.0], [93.7, 219.0], [93.8, 219.0], [93.9, 219.0], [94.0, 219.0], [94.1, 219.0], [94.2, 219.0], [94.3, 219.0], [94.4, 219.0], [94.5, 223.0], [94.6, 223.0], [94.7, 223.0], [94.8, 223.0], [94.9, 223.0], [95.0, 230.0], [95.1, 230.0], [95.2, 230.0], [95.3, 230.0], [95.4, 230.0], [95.5, 233.0], [95.6, 233.0], [95.7, 233.0], [95.8, 233.0], [95.9, 233.0], [96.0, 238.0], [96.1, 238.0], [96.2, 238.0], [96.3, 238.0], [96.4, 238.0], [96.5, 244.0], [96.6, 244.0], [96.7, 244.0], [96.8, 244.0], [96.9, 244.0], [97.0, 273.0], [97.1, 273.0], [97.2, 273.0], [97.3, 273.0], [97.4, 273.0], [97.5, 284.0], [97.6, 284.0], [97.7, 284.0], [97.8, 284.0], [97.9, 284.0], [98.0, 288.0], [98.1, 288.0], [98.2, 288.0], [98.3, 288.0], [98.4, 288.0], [98.5, 292.0], [98.6, 292.0], [98.7, 292.0], [98.8, 292.0], [98.9, 292.0], [99.0, 348.0], [99.1, 348.0], [99.2, 348.0], [99.3, 348.0], [99.4, 348.0], [99.5, 405.0], [99.6, 405.0], [99.7, 405.0], [99.8, 405.0], [99.9, 405.0]], "isOverall": false, "label": "Create User Request with Large Payload", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 100.0, "maxY": 110.0, "series": [{"data": [[300.0, 1.0], [200.0, 88.0], [400.0, 1.0], [100.0, 110.0]], "isOverall": false, "label": "Create User Request with Large Payload", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 400.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 200.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 200.0, "series": [{"data": [[0.0, 200.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 4.9E-324, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 4.470000000000001, "minX": 1.72812924E12, "maxY": 4.470000000000001, "series": [{"data": [[1.72812924E12, 4.470000000000001]], "isOverall": false, "label": "PT-005 Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72812924E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 180.0, "minX": 1.0, "maxY": 292.0, "series": [{"data": [[8.0, 292.0], [4.0, 188.05714285714285], [2.0, 209.0], [1.0, 189.0], [5.0, 212.8045977011494], [6.0, 275.6666666666667], [3.0, 180.0], [7.0, 288.0]], "isOverall": false, "label": "Create User Request with Large Payload", "isController": false}, {"data": [[4.470000000000001, 201.22499999999997]], "isOverall": false, "label": "Create User Request with Large Payload-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 8.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 463.3333333333333, "minX": 1.72812924E12, "maxY": 4586.35, "series": [{"data": [[1.72812924E12, 4586.35]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72812924E12, 463.3333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72812924E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 201.22499999999997, "minX": 1.72812924E12, "maxY": 201.22499999999997, "series": [{"data": [[1.72812924E12, 201.22499999999997]], "isOverall": false, "label": "Create User Request with Large Payload", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72812924E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 201.20999999999998, "minX": 1.72812924E12, "maxY": 201.20999999999998, "series": [{"data": [[1.72812924E12, 201.20999999999998]], "isOverall": false, "label": "Create User Request with Large Payload", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72812924E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 125.155, "minX": 1.72812924E12, "maxY": 125.155, "series": [{"data": [[1.72812924E12, 125.155]], "isOverall": false, "label": "Create User Request with Large Payload", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72812924E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 173.0, "minX": 1.72812924E12, "maxY": 405.0, "series": [{"data": [[1.72812924E12, 405.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72812924E12, 173.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72812924E12, 217.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72812924E12, 347.4400000000005]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72812924E12, 197.0]], "isOverall": false, "label": "Median", "isController": false}, {"data": [[1.72812924E12, 229.64999999999992]], "isOverall": false, "label": "95th percentile", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72812924E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 193.0, "minX": 8.0, "maxY": 244.5, "series": [{"data": [[8.0, 244.5], [20.0, 197.0], [12.0, 193.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 193.0, "minX": 8.0, "maxY": 244.5, "series": [{"data": [[8.0, 244.5], [20.0, 197.0], [12.0, 193.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 20.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72812924E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72812924E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72812924E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72812924E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72812924E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72812924E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72812924E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72812924E12, 3.3333333333333335]], "isOverall": false, "label": "Create User Request with Large Payload-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72812924E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72812924E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72812924E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72812924E12, "title": "Total Transactions Per Second"}},
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

