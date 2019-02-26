FROM node:dubnium-stretch

# Install missing Dependencies:
#  - LibGL
#  - gitbook-cli
#  - Calibre (https://calibre-ebook.com/download_linux)
RUN apt update && \
  apt install -y libgl1-mesa-glx && \
  npm install -g gitbook-cli && \
  wget -nv -O- https://download.calibre-ebook.com/linux-installer.sh | sh /dev/stdin

RUN mkdir -p /book

WORKDIR /book

EXPOSE 4000
