

# Differentiation

## Differentiable Mappings

#### Definition

> Differentiable Mappings

Let $f: \mathbb R^m \to \mathbb R^n$, and let $\mathbf p \in \mathbb R^m$. $f$ is *differentiable* at $\mathbf p$ iff there exists a linear map $\phi: \mathbb R^m \to \mathbb R^n$, such that for any $\mathbf t \in \mathbb R^m$,
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^n}} \frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \mathbf 0_{\mathbb R^n}.
$$

---

Recall that for any $f: \mathbb R^m \to \mathbb R^n$,
$$
\lim_{\mathbf x \to \mathbf x_0} r(\mathbf x) \in \mathbb R^n
$$
iff there exists some $\alpha: \mathbb R^m \to \mathbb R^n$ with $\alpha(\mathbf x) \to \mathbf 0_{\mathbb R^n}$ as $\mathbf x \to \mathbf x_0$, such that there exists an open subset $U \subseteq \mathbb R^m$ with $\mathbf x \in U$, such that for any $\mathbf x \in U$,
$$
f(\mathbf x) = \lim_{\mathbf x \to \mathbf x_0} f(\mathbf x) + \alpha(\mathbf x).
$$
Thus, in the notes below, the assertion there exists some $\alpha: \mathbb R^m \to \mathbb R^n$ with $\alpha(\mathbf t) \to \mathbf 0_{\mathbb R^n}$ as $\mathbf t \to \mathbf 0_{\mathbb R^m}$, such that there exists an open subset $U \subseteq \mathbb R^m$ with $\mathbf p \in U$, such that for any $\mathbf t \in \mathbb R^n$ with $\mathbf p + \mathbf t \in U$,
$$
\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \mathbf 0_{\mathbb R^n}
$$
is straightly used as equivalent as <a class="ref" href="#def_differentiable">ref</a> when it is refered sometime.

---

#### Lemma

The linear map $\phi$ in <a class="ref" href="#def_differentiable">ref</a> is unique.

**Proof.** As $f$ is differentiable at $\mathbf p$, there exists an $\alpha: \mathbb R^m \to \mathbb R^n$ with $\alpha(\mathbf t) \to \mathbf 0_{\mathbb R^n}$, such that there exists an open subset $U \subseteq \mathbb R^m$ with $\mathbf p \in U$, such that for any $\mathbf t \in \mathbb R^n$ with $\mathbf p + \mathbf t \in U$,
$$
\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\|\mathbf t\|_{\mathbb R^m}} = \alpha(\mathbf t).
$$
Assume <a class="ref" href="#def_differentiable">ref</a> holds for another linear mapping $\lambda$ also, then, similarly, there exists a $\beta: \mathbb R^m \to \mathbb R^n$ with $\beta(\mathbf t) = \mathbf 0_{\mathbb R^n}$, such that there exists an open subset $U' \subseteq \mathbb R^m$ with $\mathbf p \in U'$, such that for any $\mathbf t \in \mathbb R^n$ with $\mathbf p + \mathbf t \in U'$,
$$
\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \lambda(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \beta(\mathbf t).
$$
Let $\gamma = \phi - \lambda$. As $\phi$ and $-\lambda$ are both linear, then
$$
\begin{aligned}
& \ \frac{\gamma(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \alpha(\mathbf t) - \beta(\mathbf t) \\
\iff & \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \gamma(\mathbf{\hat t}) = \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} (\alpha(\mathbf t) - \beta(\mathbf t)) \\
\iff& \ \gamma(\mathbf{\hat t}) = \mathbf 0_{\mathbb R^n}.
\end{aligned}
$$
As $\mathbf t$ is arbitrarily picked from $U \cap U'$, and $U \cap U'$ is open in $\mathbb R^m$ as $U$ and $U'$ are open, the set
$$
\left\{ \mathbf{\hat t} : \mathbf t \in U \cap U' - \mathbf p \right\}
$$
gives all possible directions in $\mathbb R^m$. And as $\gamma(s \mathbf{\hat t}) = \mathbf 0_{\mathbb R^n}$, for any $s \in \mathbb R$, $\gamma(\mathbf t) = \mathbf 0_{\mathbb R^n}$ constantly. Thus, $\phi = \lambda$.

$\blacksquare$

---

#### Lemma

With the condition in <a class="ref" href="#def_differentiable">ref</a>, if $f$ is differentiable at $\mathbf p$, then $f$ is continuous at $\mathbf p$.

**Proof.** As $f$ is differentiable at $\mathbf p$, there exists an $\alpha: \mathbb R^m \to \mathbb R^n$ with $\alpha(\mathbf t) \to \mathbf 0_{\mathbb R^n}$ as $\mathbf t \to \mathbf 0_{\mathbb R^m}$, such that such that there exists an open subset $U' \subseteq \mathbb R^m$ with $\mathbf p \in U'$, such that for any $\mathbf t \in \mathbb R^n$ with $\mathbf p + \mathbf t \in U'$,
$$
\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \alpha(\mathbf t).
$$
Then, we have
$$
\begin{aligned}
& \ \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}}[f(\mathbf p + \mathbf t) - \phi(\mathbf t)] = \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} [\| \mathbf t \|_{\mathbb R^m}\alpha(\mathbf t) + f(\mathbf p)] \\
\iff & \ \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} f(\mathbf p + \mathbf t) = f(\mathbf p).
\end{aligned}
$$
This, implies $f$ is continuous at $\mathbf p$.

$\blacksquare$

## Directional Derivatives

#### Definition

Let $f: \mathbb R^m \to \mathbb R^n$, let $\mathbf u \in \mathbb R^m \setminus \{ \mathbf 0_{\mathbb R^m} \}$, and let $\mathbf p \in \mathbb R^m$. The *directional derivative* of $f$ along $\mathbf u$ at $\mathbf p$ is defined as
$$
\nabla_{\mathbf u} f(\mathbf p) := \lim_{t \to 0} \frac{f(\mathbf p + t\mathbf u) - f(\mathbf p)}{t},
$$
if the limit exists in $\mathbb R^n$.

---

#### Lemma

With the conditions in <a class="ref" href="#def_directionalDerivatives">ref</a>, for any $s \in \mathbb R \setminus \{0\}$,
$$
\nabla_{s \mathbf u} f(\mathbf p) = s\nabla_{\mathbf u} f(\mathbf p)
$$
if $\nabla_{\mathbf u} f(\mathbf p)$ exists in $\mathbb R^n$.

**Proof.** By <a class="ref" href="#def_directionalDerivatives">ref</a>,
$$
\nabla_{s \mathbf u} f(\mathbf p) = s\lim_{ts \to 0} \frac{f(\mathbf p + ts\mathbf u) - f(\mathbf p)}{ts} = s \nabla_{\mathbf u} f(\mathbf p).
$$
$\blacksquare$

---

#### Lemma

With the condition in <a class="ref" href="#def_directionalDerivatives">ref</a>, if $\nabla_{\mathbf u}f(\mathbf p)$ exists, then there exits an open subset $U \subseteq \mathbb R^m$ with $\mathbf p \in U$ such that $f$ is relative continuous on the line defined by $\mathbf p + t\mathbf u$ for some $t \in \mathbb R$.

**Proof.** Let $U$ be an open subset of $\mathbb R^m$, and let $g: \mathbb R \to \mathbb R^m$ be defined as
$$
g(t) := \mathbf p + t\mathbf u.
$$
Then $f$ is relative continuous on the line defined by $\mathbf p + t \mathbf u$ for some $t \in \mathbb R$ iff $f \restriction_{g[\mathbb R]}$ is continuous on $U \cap g[\mathbb R]$.

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

It is easy to find that $g$ is bijective, thus $g^{-1}$ is also bijective. Thus, $g \circ g^{-1}$ is an identity mapping on $g[\mathbb R] \subseteq \mathbb R^m$. As composition of mappings is associative, we have
$$
\begin{aligned}
h = f \circ g &\iff h \circ g^{-1} = f \circ g \circ g^{-1} \\
&\iff h \circ g^{-1} = f \circ (g \circ g^{-1}) \\
&\iff h \circ g^{-1} = f \restriction_{g[\mathbb R]}.
\end{aligned}
$$
It is also easy to find that $g^{-1}$ is continuous everywhere, thus, as $h$ is continuous at $0$, $f \restriction_{g[\mathbb R]}$ is continuous on $U \cap g[\mathbb R]$. Thus, $f$ is relative continuous on the line defined by $\mathbf p + t\mathbf u$ for some $t \in \mathbb R$.

$\blacksquare$

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
$\blacksquare$

## Partial Derivatives

#### Definition

Let $f: \mathbb R^m \to \mathbb R^n: \mathbf x \mapsto f(\mathbf x)$, and let $\mathbf p \in \mathbb R^m$. The *$i$-th partial derivative* of $f$ at $\mathbf p$, denoted $\frac{\partial f}{\partial x_i}$, is defined to be the directional derivative of $f$ along $\mathbf{\hat e}_i$ at $\mathbf p$. Explicitly, that is,
$$
\frac{\partial f}{\partial x_i}(\mathbf p) := \nabla_{\mathbf{\hat e}_i} f(\mathbf p) = \lim_{t \to 0} \frac{f(\mathbf p + t\mathbf{\hat e}_i) - f(\mathbf p)}{t},
$$
if the limit exists in $\mathbb R^n$.

## Gradient

#### Definition

Let $f: \mathbb R^m \to \mathbb R^n$, and let $\mathbf p \in \mathbb R^m$. The *gradient* of $f$ at $\mathbf p$ is defined as
$$
\nabla f(\mathbf p) := \left( \frac{\partial f}{\partial x_1}, \ldots , \frac{\partial f}{\partial x_m} \right),
$$
if all partial derivatives of $f$ exist.

---

Consider $\nabla$ as an $m \times 1$ matrix, and $f = (f_1, \ldots, f_n)$ as an $1 \times n$ matrix, then
$$
\nabla f =
\left[
\begin{matrix}
\frac{\partial}{\partial x_1} \\
\vdots \\
\frac{\partial}{\partial x_m}
\end{matrix}
\right]
\left[
f_1, \ldots, f_n
\right] =
\left[
\begin{matrix}
\frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_n}{\partial x_1} \\
\vdots & \ddots & \vdots \\
\frac{\partial f_1}{\partial x_m} & \cdots & \frac{\partial f_n}{\partial x_m}
\end{matrix}
\right].
$$
Consider $\frac{\partial f}{\partial x_i}$ as a $1 \times m$ matrix,

[link](https://math.stackexchange.com/questions/1853808/product-of-a-vector-and-its-transpose-projections)





