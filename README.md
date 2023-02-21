# Home Library Service

The Dockerfile is describing [multistage builds](https://earthly.dev/blog/docker-multistage/) which is a way to sequentially build the most optimized image by building multiple images.

Outside of using a small image, multistage builds is where the biggest optimizations can be made.

This multistage build uses 3 stages:

1. `development` - This is the stage where we build the image for local development.
2. `build` - This is the stage where we build the image for production.
3. `production` - We copy over the relevant production build files and start the server.

The idea behind the above multi-stage setup is to have a single Dockerfile that can be used in local development (in combination with a `docker-compose.yml` file) AND also creates a Docker image optimized for production.

## Prerequisites

- Install [Docker](https://docs.docker.com/engine/install/). I personally prever to use [Rancher Desktop](https://rancherdesktop.io/).
- Create `Docker Hub` account [Docker Hub](https://hub.docker.com/).

## Local setup

Here's how to setup locally.

1. Clone this repo `git clone https://github.com/mark-karnaukh/nodejs2022Q4-service.git`
2. Run `npm install` to install dependencies
3. Look at the `.env.example` file and create your own `.env` file following the same content structure (variables)
4. Run `docker-compose up -d` to setup local environment with Docker

This setup will handle hot reloading, so any updates you make to the NestJS code will update the container in realtime. 

## Installing new packages / database changes

If you install new dependencies or make any database changes, you'll need to run the following commands to ensure your docker containers also use the new depenencies: 

```bash
docker-compose down
```

And then run the command:

```bash
docker-compose up -d --build -V
```

## docker-compose flags

- `-d`: Run the containers in detached mode
- `-V`: Forces a fresh install of the dependencies in the container (required in case if the new npm packages were installed)
- `--build`: Rebuilds the images (required in case if the Dockerfile was tweaked)

## Build production-otimized image

```bash
docker build -t nest-home-library .

```

Check the size of the immage (should be less than 500MB):

```bash
docker images

```

This image is pushed to [DockerHub](https://hub.docker.com/repository/docker/markkarnaukh/nest-home-library-app/general)

```bash
docker pull markkarnaukh/nest-home-library-app:latest

```


## Tweaking the Dockerfile

If you make any tweaks to the Dockerfile to edit the image, you'll need to run `docker-compose up -d --build` to rebuild the image

## Testing

After application running open new terminal and enter:

To run all tests without authorization

```
npm run test
```

To run only one of all test suites

```
npm run test -- <path to suite>
```

To run all test with authorization

```
npm run test:auth
```

To run only specific test suite with authorization

```
npm run test:auth -- <path to suite>
```

### Auto-fix and format

```
npm run lint
```

```
npm run format
```

### Debugging in VSCode

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
