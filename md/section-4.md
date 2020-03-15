## The Geometry of Errors
_Why did we stick to `$\overline{\text{VE}}$`?_

---

Recall:
`$$
    \overline{\text{VE}}(\mathbf{w}) = \sum_{s \in \mathcal{S}}
    \mu_{\pi}(s) \left[ v_{\pi}(s) - \widehat{v}(s, \mathbf{w}) \right]^2
$$`
where
`$$
    \mu_{\pi}(s) = \lim_{t \rightarrow \infty} P(S_{t+1} = s | A_{0,t} \sim \pi)
$$`



![The Geometry of Errors](./img/errors.png)

---

`$$
\Pi v = \operatorname{arg min}_{\mathbf{w} \in \mathbb{R}^d} ||v - v_{\mathbf{w}}||^2_\mu
$$`

`$\Pi v_{\pi} = v_{\mathbf{w}}$` is found by MC methods (slow)



## The Bellman error
is the expectation of the TD error:
`$$
 \overline{\delta_{\mathbf{w}}} = \mathbb{E}_{\pi} \left[ R_{t+1} +\gamma v_{\mathbf{w}} - v_{\mathbf{w}}(S_t) \thinspace | \thinspace S_t = s, A_t \sim \pi \right]
$$`
this gives rise to the _mean squared Bellman error_:
`$$
\overline{\text{BE}} = || \overline{\delta_{\mathbf{w}}} ||^2_{\mu}
$$`
which cannot (usually) be `$0$`

---

This can be written `$ \overline{\delta_{\mathbf{w}}} = B_\pi v_{\mathbf{w}} - v_{\mathbf{w}}$` where
`$$
    B_{\pi}(v)(s) = \mathbb{E}_\pi \left[ r + \gamma v(s') \right]
$$`
defines the _Bellman operator_



The _projected Bellman error_ `$\overline{\text{PBE}}$` is valued `$0$` for the
TD fixed point `$\mathbf{w}_{\text{TD}}$`:
`$$
\mathbb{E} \left[ R_{t+1} \mathbf{x}_{t+1} - \mathbf{x}_t (\mathbf{x}_t - \gamma \mathbf{x}_{t+1})^{T}\cdot \mathbf{w}_{\text{TD}} \right] = 0
$$`
in the linear case. Yet semi-gradient methods may not converge to it. Also,
it does not generally minimize `$\overline{\text{VE}}$` and `$\overline{\text{BE}}$`.



Third, the _mean squared TD Error_ is given by:
`$$
\overline{\text{TDE}} = \sum_{s \in \mathcal{S}} \mu(s) \mathbb{E}\left[ \delta_t^2 \thinspace | \thinspace S_t = s, A_t \sim \pi \right] = \mathbb{E}_{b} \left[ \rho_t \delta_t^2 \right]
$$`
where
`$$
\delta_t = R_{t+1} + \gamma \widehat{v}(s_{t+1}, \mathbf{w}_t) - \widehat{v}(s_{t}, \mathbf{w}_t)
$$`
