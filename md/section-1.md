# Chapter 11
_Off-policy Methods with Approximation_



## Recap of Chapters 9-10
In Ch. 9, the goal was to minimize the _mean squared value error_:

`$$
    \overline{\text{VE}}(\mathbf{w}) = \sum_{s \in \mathcal{S}}
    \mu_s \left[ v_{\pi}(s) - \widehat{v}(s, \mathbf{w}) \right]^2
$$`

To do this, we want to use _Stochastic Gradient Descent_: 

`$$ 
\mathbf{w}_{t+1} = \mathbf{w}_t + 
\alpha  \delta_t
\nabla \widehat{v}(S_t, \mathbf{w}_t) 
$$`
`$$
\delta_t := v_{\pi}(S_{t+1}) - \widehat{v}(S_t, \mathbf{w}_t)
$$`

while sampling over states



Which we turn into a _semi-gradient_-method:
`$$
  \mathbf{w}_{t+1} = \mathbf{w}_t +
   \alpha \delta_t \nabla \widehat{v} (S_t, A_t, \mathbf{w}_t)
$$`
`$$
\delta_t := R_{t+1} + \gamma \widehat{v}(S_{t+1}, \mathbf{w_t}) - \widehat{v}(S_{t}, \mathbf{w}_t)
$$`
_Semi_: We replace `$v_{\pi}(S_{t+1})$` by our approximation (yet we do not take
  the gradient twice)

*Theorem* : This converges



## Chapter 11: Off policy
We can try to minimize $\overline{\text{VE}}$ by naively adding _importance sampling_:
`$$
  \mathbf{w}_{t+1} = \mathbf{w}_t +
   \alpha \rho_t \delta_t \nabla \widehat{v} (S_t, A_t, \mathbf{w}_t)
$$`
where `$\rho_t = \frac{d\pi}{db}(A_t, S_t) = \frac{\pi(A_t, S_t)}{b(A_t, S_t)} $`

This naive approach can also be applied to
Expected Sarsa, Q-learning and Tree Backup

---

Although for Expected Sarsa, importance sampling only comes in at `$n > 1$`,
since when `$n=1$`:
`$$
  \delta_t = R_{t+1} + \gamma\sum_a \pi(a | S_{t+1})\widehat{q}(S_{t+1}, a, \mathbf{w}_t) - \widehat{q}(S_t, a, \mathbf{w}_t)
$$`
Arguably, this is because `$\rho_t = 1$` in that case.

For `$n$`-step Tree backup, there is also no importance sampling (you are already compensating
for the states you are not visiting).



## The central problem
Stochastic semi-gradient descent with importance sampling does not necessarily converge!

(And even if it does, it might not yield the desired result.)