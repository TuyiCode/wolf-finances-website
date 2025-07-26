#!/bin/bash

echo "🔄 Force uploading updated files..."

FTP_SERVER="82.180.172.224"
FTP_USER="u365960468.wolffinances.com"
FTP_PASS="SEA38Special95$"

# Force upload specific files
lftp -c "
set ssl:verify-certificate no;
open -u $FTP_USER,$FTP_PASS $FTP_SERVER;
rm public_html/css/style.css;
put css/style.css -o public_html/css/style.css;
rm public_html/js/budget.js;
put js/budget.js -o public_html/js/budget.js;
"

echo "✅ Force upload completed" 