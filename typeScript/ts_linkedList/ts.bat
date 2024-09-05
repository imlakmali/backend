@echo on
tsc %1 --target es6  --downlevelIteration --lib "esnext,dom"
echo compiled %1
