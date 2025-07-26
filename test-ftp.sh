#!/bin/bash

echo "🔍 Testing FTP Connection..."

FTP_SERVER="82.180.172.224"
FTP_USER="u365960468.wolffinances.com"
FTP_PASS="SEA38Special95$"

# Test FTP connection
lftp -c "
set ssl:verify-certificate no;
open -u $FTP_USER,$FTP_PASS $FTP_SERVER;
ls public_html/;
"

echo "✅ FTP test completed" 