#!/bin/bash
RED='\033[0;31m'
NC='\033[0m' # No Color
Green='\033[0;32m'        # Green
BGreen='\033[1;32m'       # Green
BYellow='\033[1;33m'      # Yellow
BBlue='\033[1;34m'        # Blue

echo "Starting to run ${RED}PoE Selling${NC} Integrated - " `date`
echo "Build ${BBlue}frontend...${NC}"
docker build -t poe_selling_frontend --network=host ./frontend
echo "Done to build ${BGreen}frontend image successfully!${NC}"
echo "Build ${BBlue}backend...${NC}"
docker build -t poe_selling_backend ./backend
echo "Done to build ${BGreen}backend image successfully!${NC}"
echo "Starting running compose"
docker-compose -f compose-integrated.yml up --build
