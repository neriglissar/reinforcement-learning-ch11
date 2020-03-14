## More hopes shattered 
`$\overline{\text{VE}}$` and `$\overline{\text{BE}}$` are not learnable


To run a convergent algorithm, you need to sample `$S_{t+1}$` twice from the same `$S_t$`,
not from the same `$\mathbf{x}_t(s)$`. Indeed, VE and BE are not functions of (feature) data. 



## Rest of the chapter
* SGD for PBE
* Emphatic-TD: A more ad-hoc solution to Baird's counterexample



## Summary
Problems with off-policy:
* High variance as a result of correcting for the behaviour policy
* Bootstrapping becomes unstable