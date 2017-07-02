# CKEditor Granite widget
This project is a simple granite ui widget to add a CKEditor field to AEM Touch-UI dialogs.

This project is based on the [gradle-aem-example](https://github.com/Cognifide/gradle-aem-example) which is based on the [gradle-aem-plugin](https://github.com/Cognifide/gradle-aem-plugin)

## Description

This project should be used while starting new project based on AEM.
Currently Gradle does not support Maven's like archetypes, so you have to copy this project at start and customize it for your needs.
Documentation for AEM plugin is available in project [Gradle AEM Plugin](https://github.com/Cognifide/gradle-aem-plugin).


## Environment

Tested on:

* Java 1.8
* Gradle 4.0
* Adobe AEM 6.2

## Build

```sh
# generate idea config
./gradlew idea

# generate eclipse config
./gradlew eclipse

# build package to /build/distributions/
./gradlew build

# deploy package to AEM
./gradlew aemDeploy

# deploy package... runs default tasks 'clean' 'build' 'aemDeploy' in that order.
./gradlew

```

## Usage

add it just like you'd add any granite ui widget to a dialog. use `sling:resourceType="/apps/ckeditor"`

sample:

```
<text jcr:primaryType="nt:unstructured" 
	  name="./text"
	  sling:resourceType="/apps/ckeditor">
</text>
```