# Differentiable Mappings

In calculus, everything has its geometric meaning, especially when a mapping is said to be differentiable at a point in its domain. Its rigorous definition is no more than a precise description of the intuition of smoothness.

---

Consider we have a mapping $f_1: \mathbb R^m \to \mathbb R$. we assume that there is a point $\mathbf p \in \mathbb R^m$, such that $f_1$ is smooth at $\mathbf p$. As $f_1$ is smooth at $\mathbf p$, intuitively, it means $f_1$ tends to be the tangent plain of $f_1$ at $\mathbf p$ if we magnify the details round $f_1(\mathbf p)$. That is, there exists a neighbourhood $N$ of $\mathbf p$, such that $f_1$ is smooth on $N$.

---

As $\mathbb R^2$ is a metric space, every open balls are open, so there exists a $\delta \in \mathbb R_{> 0}$, such that $f_1$ is smooth on $B(\mathbf p, \delta)$, where $B(\mathbf p , \delta)$ denotes the open ball with center as $\mathbf p$ and $\delta$ as radius. Thus, if $P_1: \mathbb R^m \to \mathbb R$ describes the tengent plain of $f_1$ at $\mathbf p$, then
$$
\lim_{\delta \to 0} f_1[B(\mathbf p , \delta)] = \lim_{\delta \to 0} P_1[B(\mathbf p, \delta)].
$$
---

In the term of elements, that is, for any $\mathbf t \in \mathbb R^m$ with $\mathbf p + \mathbf t \in B(\mathbf p, \delta)$,
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} f_1(\mathbf p + \mathbf t) = \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} P_1(\mathbf p + \mathbf t).
$$
---

As $P_1$ describes a plain, so it can be considered as a translated linear mapping. That is, there exists a linear mapping $\phi_1: \mathbb R^m \to \mathbb R$, such that
$$
P_1(\mathbf p + \mathbf t) = \phi_1 (\mathbf p + \mathbf t - \mathbf p) + f_1(\mathbf p).
$$

---

Thus, we have
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} f_1(\mathbf p + \mathbf t) = \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \phi_1 (\mathbf t) + f_1(\mathbf p).
$$

---

Move the term $f_1(\mathbf p)$ to the left hand side, we observe this limit,
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \frac{f_1(\mathbf p + \mathbf t) - f_1(\mathbf t) - \phi_1(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = 0.
$$
Then this equation describes the smoothness of $f$ at $\mathbf p$. In this case, in calculus, we say that $f$ is differentiable at $\mathbf p$.

---

Now, considere there are $f_1, \ldots, f_n: \mathbb R^m \to \mathbb R^n$ such that for any $i \in \{1, \ldots, n\}$ such that $f_i$ is differentiable at $\mathbf p \in \mathbb R^m$; i.e., for any $i$, there exists a linear $\phi_i: \mathbb R^m \to \mathbb R^n$, such that
$$
\left\langle \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \frac{f_i(\mathbf p + \mathbf t) - f_i(\mathbf t) - \phi_i(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} \right\rangle_{i = 1}^n = \left\langle 0_i \right\rangle_{i = 1}^n.
$$
By vector sum, we have
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \frac{f(\mathbf p + \mathbf t) - f(\mathbf t) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \mathbf 0_{\mathbb R^n},
$$
where $\phi(\mathbf t) = \langle \phi_i(\mathbf t) \rangle_{i = 1}^n$.

---

Thus, we have our first definition.

---

#### Definition

> Differentiable Mappings

Let $f: \mathbb R^m \to \mathbb R^n$, and let $\mathbf p \in \mathbb R^m$. $f$ is said to be differentiable at $\mathbf p$ iff there exists a linear mapping $\phi: \mathbb R^m \to \mathbb R^n$ such that for any $\mathbf t \in \mathbb R^m$,
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \mathbf 0_{\mathbb R^n}.
$$

---

#### Lemma

With the conditions above, $\phi$ is unique.

---

**Proof.** As $f$ is differentiable at $\mathbf p$, there exists an $\alpha: \mathbb R^m \to \mathbb R^n$ with $\alpha(\mathbf t) \to \mathbf 0_{\mathbb R^n}$, such that there exists an open subset $U \subseteq \mathbb R^m$ with $\mathbf p \in U$, such that for any $\mathbf t \in \mathbb R^n$ with $\mathbf p + \mathbf t \in U$,
$$
\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\|\mathbf t\|_{\mathbb R^m}} = \alpha(\mathbf t).
$$

---

Assume there is another linear mapping $\lambda$, such that
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}}\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \mathbf 0_{\mathbb R^n},
$$
then, similarly, there exists a $\beta: \mathbb R^m \to \mathbb R^n$ with $\beta(\mathbf t) = \mathbf 0_{\mathbb R^n}$, such that there exists an open subset $U' \subseteq \mathbb R^m$ with $\mathbf p \in U'$, such that for any $\mathbf t \in \mathbb R^n$ with $\mathbf p + \mathbf t \in U'$,
$$
\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \lambda(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \beta(\mathbf t).
$$

---

Let $\gamma = \phi - \lambda$. As $\phi$ and $-\lambda$ are both linear, then
$$
\begin{aligned}
& \ \frac{\gamma(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \alpha(\mathbf t) - \beta(\mathbf t) \\
\iff & \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \gamma(\mathbf{\hat t}) = \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} (\alpha(\mathbf t) - \beta(\mathbf t)) \\
\iff& \ \gamma(\mathbf{\hat t}) = \mathbf 0_{\mathbb R^n}.
\end{aligned}
$$

---

As $\mathbf t$ is arbitrarily picked from $U \cap U'$, and $U \cap U'$ is open in $\mathbb R^m$ as $U$ and $U'$ are open, the set
$$
\left\{ \mathbf{\hat t} : \mathbf t \in U \cap U' - \mathbf p \right\}
$$
gives all possible directions in $\mathbb R^m$. And as $\gamma(s \mathbf{\hat t}) = \mathbf 0_{\mathbb R^n}$, for any $s \in \mathbb R$, $\gamma(\mathbf t) = \mathbf 0_{\mathbb R^n}$ constantly. Thus, $\phi = \lambda$.

$\blacksquare$

---

