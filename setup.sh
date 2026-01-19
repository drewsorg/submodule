#!/bin/bash

# Setup script for the repository
echo "Initializing submodules..."
git submodule update --init --recursive

echo "Submodules initialized successfully!"
echo "Gitignore templates available in: external/gitignore"
