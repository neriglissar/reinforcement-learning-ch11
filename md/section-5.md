## A shimmer of hope 
The TDE objective is a proper expectation. So SGD works!


Sanity check: Why was this not true for VE?

---

Because VE contained an unknown function (`$v_{\pi}$`) that we had
to replace with an estimate



### SGD for TDE
The updates look like:
`$$
\mathbf{w}_{t+1} = \mathbf{w}_t + \alpha \rho_t \delta_t \left( \nabla \widehat{v}(S_t, \mathbf{w}_t) - \gamma \nabla \widehat{v}(S_{t+1}, \mathbf{w}_t) \right)
$$`
this is called the _naive residual gradient algorithm_.
_Naive_ because: the true values of `$\widehat{v}$` may not minimize TDE



### SGD also works for BE
`$$
\mathbf{w}_{t+1} = \mathbf{w}_t - \frac{1}{2} \alpha \nabla \left( \mathbb{E}_{\pi} [\delta_t]^2\right) \\
= \mathbf{w}_t + \alpha \left[ \mathbb{E}_b [\rho_t (R_{t+1} + \gamma \widehat{v}(S_{t+1}, \mathbf{w}_t)) - \widehat{v}(S_t, \mathbf{w}_t)\right] \\
\cdot \left[ \nabla \widehat{v} (S_t, \mathbf{w}_t) - \gamma \mathbb{E}_b [ \rho_t \nabla \widehat{v} (S_{t+1}, \mathbf{w}_t)] \right]
$$`
But you have to sample `$S_{t+1}$` twice! This is called the _residual gradient_ algorithm and it converges to a minimum of `$\overline{\text{BE}}$`