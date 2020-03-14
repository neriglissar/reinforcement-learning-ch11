# The Deadly Triad



1. Function approximation
2. Bootstrapping
3. Off-policy training <!-- .element: class="fragment highlight-red" data-fragment-index="1" -->

---

_Bootstrapping_: update targets using existing estimates rather than actual rewards and
complete returns



## Digression
Why off-policy in the first place?

1. Learning many value functions in parallel <!-- .element: class="fragment" -->
2. Real intelligent agents learn off-policy: <!-- .element: class="fragment" -->
      * Plato's cave <!-- .element: class="fragment" -->
      * "Empty heads turned toward the world" (Merleau-Ponty, phenomenology of perception) <!-- .element: class="fragment" -->

---

Can you learn by _just_ watching someone who can do the task exceptionally well? Then on-policy works, e.g. pole-balancing, mountain car


Non-examples: Chess, ...?