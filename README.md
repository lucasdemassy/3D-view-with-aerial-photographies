
# 3D view with aerial photographies

## Context
This project was completed within a 3D course at the [ENSG](http://www.ensg.eu/). This project was requested by the IGN and thet goal of is to visualize aerial photographies in a 3D map according to their orientation. This project aims to give the impression of a 3D rendering without using 3D data and only 3D images.

The user can rotate about a specific point.

Two main objectives were determined :
- fetch and render images from a IGN database. All images displaying a specific point must be fetched and displayed.
- find the image taken with the camera with the most appropriate point of view compared to the user point of view to display this image preferably

The working example `index.html` is in the `examples` folder. Moreover, it can be found at :  http://lucasdemassy.github.io/3D-view-with-aerial-photographies 

## Installation

### Prerequisites
Nodejs is required in order to run this program.

### How to install
The node configuration is defined in the package.json. Use the npm package to download all the needed dependencies.
```
npm install
```

## Run the project
To run the project, run the following command line :
```
npm start
```
The server will start and the project can be accessed locally. 

## Authors
- Lucas Bres 
- Julie Grosmaire

## Licence
This project was forked from [Photogrammetric Camera](https://github.com/itownsResearch/itowns-photogrammetric-camera) and therefore is also dual-licenced under Cecill-B V1.0 and MIT. Incorporated libraries are published under their original licences.

#### Reference :
- base project : [Camera Photogrammétrique](https://github.com/itownsResearch/itowns-photogrammetric-camera)
- images : IGN remonter le temps


[Photo1 link](https://wxs.ign.fr/02eikbvn4qqd6y1g5iiiq8fi/iipsrv.fcgi?FIF=DEMAT.PVA/2314-1701/IGNF_PVA_1-0__1960-09__C2314-1701_1960_CDP1575_0044.jp2&WID=1000&CVT=JPEG)
