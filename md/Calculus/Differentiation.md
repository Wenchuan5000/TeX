# Differentiation

## Differentiable Mappings

Consider we have a mapping $f_1: \mathbb R^m \to \mathbb R$. we assume that there is a point $\mathbf p \in \mathbb R^m$, such that $f_1$ is smooth at $\mathbf p$. As $f_1$ is smooth at $\mathbf p$, intuitively, it means $f_1$ tends to be the tangent plane of $f_1$ at $\mathbf p$ if we magnify the details round $f_1(\mathbf p)$. That is, there exists a neighbourhood $N$ of $\mathbf p$, such that $f_1$ is smooth on $N$.

---

As $\mathbb R^n$ is considered as a metric space, every open balls are open, so there exists a $\delta \in \mathbb R_{> 0}$, such that $f_1$ is smooth on $B(\mathbf p, \delta)$. Thus, if $P_1: \mathbb R^m \to \mathbb R$ describes the tangent plane of $f_1$ at $\mathbf p$, then
$$
\lim_{\delta \to 0} f_1[B(\mathbf p , \delta)] = \lim_{\delta \to 0} P_1[B(\mathbf p, \delta)].
$$
In the term of elements, that is, for any $\mathbf t \in \mathbb R^m$ with $\mathbf p + \mathbf t \in B(\mathbf p, \delta)$,
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} f_1(\mathbf p + \mathbf t) = \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} P_1(\mathbf p + \mathbf t).
$$
---

As $P_1$ describes a plain, so it can be considered as a translated linear mapping. That is, there exists a linear mapping $\phi_1: \mathbb R^m \to \mathbb R$, such that
$$
P_1(\mathbf p + \mathbf t) = \phi_1 (\mathbf p + \mathbf t - \mathbf p) + f_1(\mathbf p).
$$

Thus, we have
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} f_1(\mathbf p + \mathbf t) = \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \phi_1 (\mathbf t) + f_1(\mathbf p).
$$

Move the term $f_1(\mathbf p)$ to the left hand side, we observe this limit,
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \frac{f_1(\mathbf p + \mathbf t) - f_1(\mathbf t) - \phi_1(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = 0.
$$
Then this equation describes the smoothness of $f$ at $\mathbf p$. In this case, in calculus, we say that $f$ is differentiable at $\mathbf p$.

---

Now, considere there are $f_1, \ldots, f_n: \mathbb R^m \to \mathbb R^n$ such that for any $i \in \{1, \ldots, n\}$ such that $f_i$ is differentiable at $\mathbf p \in \mathbb R^m$; i.e., for any $i$, there exists a linear $\phi_i: \mathbb R^m \to \mathbb R^n$, such that
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

Q.E.D.

## Directional Derivatives

* need motivation

#### Definition

> Directional Derivative

Let $f: \mathbb R^m \to \mathbb R^n$. Let $\mathbf u \in \mathbb R^m \setminus \{ \mathbf 0_{\mathbb R^m} \}$, and let $\mathbf p \in \mathbb R^m$. The *$\mathbf u$-directional derivative* of $f$ at $\mathbf p$ is defined as
$$
\begin{aligned}
\nabla_{\mathbf u} f(\mathbf p) := \lim_{t \to 0} \frac{f(\mathbf p + t\mathbf u) - f(\mathbf p)}{t},
\end{aligned}
$$
if the limit exists in $\mathbb R^n$.

---

#### Lemma

With the condition above, for any $s\in \mathbb R \setminus \{0\}$.
$$
\nabla_{s\mathbf u} f(\mathbf p) = s \nabla_{\mathbf u} f(\mathbf p)
$$
if $\nabla_{\mathbf u} f(\mathbf p) \in \mathbb R^n$.

**Proof.** By the definition of directional derivative
$$
\nabla_{s \mathbf u} f(\mathbf p) = s\lim_{ts \to 0} \frac{f(\mathbf p + ts\mathbf u) - f(\mathbf p)}{ts} = s \nabla_{\mathbf u} f(\mathbf p).
$$
Q.E.D.

---

#### Lemma

With the condition above, if $\nabla_{\mathbf u} f(\mathbf p)$ exists, then there exists an open subset $U \subseteq \mathbb R^m$ with $\mathbf p \in U$ such that $f$ is relative continuous on the line described by $\mathbf p + t\mathbf u$ for some $t \in \mathbb R$.

**Proof.** Let $U$ be an open subset of $\mathbb R^m$, and let $g: \mathbb R \to \mathbb R^m$ be defined as
$$
g(t) := \mathbf p + t\mathbf u.
$$
Then $f$ is relative continuous on the line defined by $\mathbf p + t \mathbf u$ for some $t \in \mathbb R$ iff $f \restriction_{g[\mathbb R]}$ is continuous on $U \cap g[\mathbb R]$.

---

Let $h = f \circ g$, then
$$
\nabla_{\mathbf u} f(\mathbf p) = \lim_{t \to 0} \frac{h(t) - h(0)}{t} = \mathbf v \in \mathbb R^n.
$$
Then, there exists an $\alpha: \mathbb R \to \mathbb R^n$ with $\alpha(t) \to \mathbf 0_{\mathbb R^n}$ as $t \to 0$, such that there exists an open subset $I \subseteq \mathbb R$ with $0 \in I$, such that for any $t \in I$,
$$
h(t) = t\mathbf v + t\alpha(t) + h(0).
$$
Then we have
$$
\begin{aligned}
& \ \lim_{t \to 0} h(t) = \lim_{t \to 0} [t\mathbf v + t\alpha(t) + h(0)] \\
\iff & \ \lim_{t \to 0} h(t) = h(0).
\end{aligned}
$$
Thus, $h$ is continuous at $0$.

---

It is easy to find that $g$ is bijective, thus $g^{-1}$ is also bijective. Thus, $g \circ g^{-1}$ is an identity mapping on $g[\mathbb R] \subseteq \mathbb R^m$. As composition of mappings is associative, we have
$$
\begin{aligned}
h = f \circ g &\iff h \circ g^{-1} = f \circ g \circ g^{-1} \\
&\iff h \circ g^{-1} = f \circ (g \circ g^{-1}) \\
&\iff h \circ g^{-1} = f \restriction_{g[\mathbb R]}.
\end{aligned}
$$
It is also easy to find that $g^{-1}$ is continuous everywhere, thus, as $h$ is continuous at $0$, $f \restriction_{g[\mathbb R]}$ is continuous on $U \cap g[\mathbb R]$. Thus, $f$ is relative continuous on the line defined by $\mathbf p + t\mathbf u$ for some $t \in \mathbb R$.

Q.E.D.

---

#### Lemma

Let $\mathbf p, \mathbf q \in \mathbb R^m$. For convenience, let $g: \mathbb R \to \mathbb R^m$ be defined as
$$
g(t) := \mathbf p + t(\mathbf q - \mathbf p).
$$
Let $f: \mathbb R^m \to \mathbb R^n$. If $f \restriction_{g[\mathbb R]}$ is continuous on $g[(0,1)]$, and differentiable on $g[[0,1]]$, then
$$
\| f(\mathbf q) - f(\mathbf p) \|_{\mathbb R^n} \le \sup_{\mathbf x \in g[(a,b)]} \| \nabla_{\mathbf u} f(\mathbf x) \|_{\mathbb R^n}.
$$
**Proof.** Let $h = f \circ g$. As $f$ is continuous on $g[(0,1)]$ and $g$ is continuous everywhere on $\mathbb R$, $h$ is continuous on $(0,1)$. As $f$ is differentiable on $g[[0,1]]$ and $g$ is differentiable on $[0,1]$, then $h$ is differentiable on $[0,1]$ 📖. By mean value theorem :book:, there exists a $c \in (0,1)$ such that
$$
h'(c) = \frac{h(1) - h(0)}{1 - 0}.
$$

---

By the formal definition of derivatives, we have
$$
\begin{aligned}
h'(c) &= \lim_{t \to 0} \frac{h(c + t) - h(c)}{t} \\
&= \lim_{t \to 0} \frac{f(g(c + t)) - f(c)}{t} \\
&= \left.\lim_{t \to 0} \frac{f(\mathbf p + c\mathbf u + t\mathbf u) - f(\mathbf p + c\mathbf u)}{t}\right|_{\mathbf u = \mathbf q - \mathbf p} \\
&= \left. \lim_{t \to 0} \frac{f(\mathbf c + t\mathbf u) - f(\mathbf c)}{t} \right|_{\mathbf c = \mathbf p + c \mathbf u} \\
&= \nabla_{\mathbf u}f(\mathbf c).
\end{aligned}
$$
Thus, there exists a $\mathbf c \in g[(0,1)]$ such that
$$
\nabla_{\mathbf u} f(\mathbf c) = h(1) - h(0) =f(\mathbf q) - f(\mathbf p).
$$
This implies that there exists some $\mathbf x \in g[(0,1)]$ such that
$$
\| \nabla_{\mathbf u}f(\mathbf x) \| \ge \| \nabla_{\mathbf u}f(\mathbf c) \|.
$$
Thus,
$$
\| f(\mathbf q) - f(\mathbf p) \| \le \sup_{\mathbf x \in g[(0,1)]}\| \nabla_{\mathbf u} f(\mathbf x) \|.
$$
Q.E.D.

## Partial Derivatives

