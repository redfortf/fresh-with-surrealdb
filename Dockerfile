FROM denoland/deno:1.39.0

ARG GIT_REVISION
ENV DENO_DEPLOYMENT_ID=${GIT_REVISION}

WORKDIR /app

COPY . .
RUN deno cache main.ts

EXPOSE ${FRESH_PORT}

CMD ["run", "-A", "main.ts"]
