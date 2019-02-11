#!/bin/sh
npm run build
rm -rf build ../../../fs-wo_osa3/build
cp -r build ../../../fs-wo_osa3/build