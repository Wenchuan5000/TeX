# Differentiation

## Differentiable Mappings

#### Definition: Differentiable Mappings

Let $\mathbb X = (X, \| \cdot \|_{\mathbb X})$ and let $\mathbb Y = (Y, \| \cdot \|_{\mathbb Y})$.

Let $f: \mathbb X \to \mathbb Y$, and let $\mathbf p \in \mathbb X$.

$f$ is said to be **differentiable at $\mathbf p$** iff there exists a linear mapping $\phi: \mathbb X \to \mathbb Y$ such that for any $\mathbf t \in \mathbb X$,
$$
f(\mathbf p + \mathbf t) = f(\mathbf p) + \phi(\mathbf t) + o(\mathbf t),
$$
as $\mathbf t \to \mathbf 0_{\mathbb X}$.

#### Corollary: Uniqness of $\phi$

In <u>Definition: Differentiable Mappings</u>, the linear mapping $\phi$ is unique.

**Proof.** Suppose there is another linear mapping $\lambda: \mathbb X \to \mathbb Y$, such that for any $\mathbf t \in \mathbb X$,
$$
f(\mathbf p + \mathbf t) = f(\mathbf p) + \lambda(\mathbf t) + o_1(\mathbf t)
$$
as $\mathbf t \to \mathbf 0_{\mathbb X}$, then we have
$$
\begin{aligned}
\phi(\mathbf{\hat t}) - \lambda(\mathbf{\hat t}) &= \lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{\phi(\mathbf t) - \lambda(\mathbf t)}{\| \mathbf t \|_{\mathbb X}} \\
&= \lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{o(\mathbf t) - o_1(\mathbf t)}{\| \mathbf t \|_{\mathbb X}}
\end{aligned}
$$
Here, $o - o_1$ is also a little o of $\mathbf t$, thus, the limit above is zero, which implies
$$
\phi(\mathbf{\hat t}) = \lambda(\hat t).
$$
As $\mathbf t$ is arbitrarily given, $\mathbf{\hat t}$ defines all possible directions in $\mathbb X$. This implies
$$
\phi = \lambda.
$$
Q.E.D.

#### Corollary: Alternative Definition of Differentiable Mappings

With the condition in <u>Definition: Differentiable Mappings</u>, $f$ is differentiable at $\mathbf p \in \mathbb X$ iff there exists a linear mapping $\phi: \mathbb X \to \mathbb Y$ such that for any $\mathbf t \in \mathbb X$,
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb X}} = \mathbf 0_{\mathbb Y},
$$
or, equivalently,
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{\| f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t) \|_{\mathbb Y}}{\| \mathbf t \|_{\mathbb X}} = 0.
$$
**Proof.** This can be proved from both sides. Consider the equations in this proposition and in <u>Definition: Differentiable Mappings</u>. We observe that the equation in <u>Definition: Differentiable Mappings</u> holds iff
$$
\begin{aligned}
& \frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb X}} = \frac{o(\mathbf t)}{\| \mathbf t \|_{\mathbb X}} \\
\iff & \lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb X}} = \mathbf 0_{\mathbb Y} \\
\iff & \lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{\|f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)\|_{\mathbb Y}}{\| \mathbf t \|_{\mathbb X}} = 0.
\end{aligned}
$$
Q.E.D.

#### Corollary: Differentiability Implies Continuity

With the condition above, if $f$ is differentiable at $\mathbf p$, then $f$ is continuous at $\mathbf p$.

**Proof.** By <u>Definition: Differentiable Mappings</u> as $f$ is differentiable at $\mathbf p$, there exists a linear mapping $\phi:\mathbb X \to \mathbb Y$, such that for any $\mathbf t \in \mathbb X$,
$$
f(\mathbf p + \mathbf t) = f(\mathbf p) + \phi(\mathbf t) + o(\mathbf t)
$$

as $\mathbf t \to \mathbf 0_{\mathbb X}$. As
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \phi(\mathbf t) = \mathbf 0_{\mathbb Y},
$$
and
$$
\lim_{\mathbf t \to \mathbb 0_{\mathbb X}}o(\mathbf t) = \mathbf 0_\mathbb Y,
$$
we have
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb X}} f(\mathbf p + \mathbf t) = f(\mathbf p),
$$
which implies that $f$ is continuous at $\mathbf p$.

Q.E.D.

#### Theorem: Differentiability of Composed Mappings

Let $\mathbb X = (X, \| \cdot \|_{\mathbb X})$, $\mathbb Y = (Y, \| \cdot \|_{\mathbb Y})$, and $\mathbb M = (M, \| \cdot \|_{\mathbb M})$.

Let $f: \mathbb X \to \mathbb Y$ and $g: \mathbb Y \to \mathbb Z$.

Let $\mathbf p \in \mathbb X$.

If $f$ is differentiable at $\mathbf p$, and $g$ is differentiable at $f(\mathbf p)$, then $g \circ f$ is differentiable at $\mathbf p$.

**Proof.** As $g$ is differentiable at $f(\mathbf p)$, there exists a $\lambda: \mathbb Y \to \mathbb S$ such that for any $\mathbf s \in \mathbb Y$ with $f(\mathbf p) + \mathbf s \in f[\mathbb X]$,
$$
g(f(\mathbf p) + \mathbf s) = g(f(\mathbf p)) + \lambda(\mathbf s) + o(\mathbf s),
$$
as $\mathbf s \to \mathbf 0_{\mathbb Y}$.

As $f$ is differentiable at $\mathbf p$, $f$ is continuous at $\mathbf p$, thus, there exists $\mathbf t \in \mathbb X$, such that
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb X}} f(\mathbf p + \mathbf t) = f(\mathbf p) + \mathbf s.
$$
Since $f$ is differentiable at $\mathbf p$, there exists a linear mapping $\phi: \mathbb X \to \mathbb Y$, such that
$$
f(\mathbf p + \mathbf t) = f(\mathbf p) + \phi(\mathbf t) + o_1(\mathbf t),
$$
as $\mathbf t \to \mathbf0_{\mathbb X}$. Then, we have
$$
g(f(\mathbf p + \mathbf t)) = g(f(\mathbf p)) + \lambda(\Delta f) + o(\Delta f)
$$
as $\mathbf t \to \mathbf 0_{\mathbb X}$, where
$$
\Delta f = f(\mathbf p + \mathbf t) - f(\mathbf p) = \phi(\mathbf t) + o_1(\mathbf t)
$$
as $\mathbf t \to \mathbf 0_{\mathbb X}$.

First, find $\lambda(\Delta f)$. As $\lambda$ is linear,
$$
\lambda(\Delta f) = \lambda(\phi(\mathbf t)) + \lambda(o_1(\mathbf t))
$$
as $\mathbf t \to \mathbf 0_\mathbb X$, and $\lambda \circ \phi$ is also linear. As
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{\lambda(o_1(\mathbf t))}{\| \mathbf t \|_{\mathbb X}} = \lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \lambda \left( \frac{o_1(\mathbf t)}{\| \mathbf t \|_{\mathbb X}} \right) = \mathbf 0_\mathbb M,
$$
we have $\lambda(o_1(\mathbf t)) = o_2(\mathbf t)$ as $\mathbf t \to \mathbf 0_{\mathbb X}$.

Then, find $o(\Delta f)$. We have
$$
\begin{aligned}
\mathbf 0_{\mathbb M} &= \lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{o(\phi(\mathbf t) + o_1(\mathbf t))}{\| \phi(\mathbf t) + o_1(\mathbf t) \|_{\mathbb Y}} \\
&= \lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{o(\phi(\mathbf t) + o_1(\mathbf t))\| \mathbf t \|_{\mathbb X}^{-1}}{\| \phi(\mathbf t) + o_1(\mathbf t) \|_{\mathbb Y} \| \mathbf t \|_{\mathbb X}^{-1}} \\
&= \lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{o(\phi(\mathbf t) + o_1(\mathbf t))}{\| \mathbf t \|_{\mathbb X} \left\| \phi(\mathbf{\hat t}) \right\|_{\mathbb Y}} \\
&= \left\| \phi(\mathbf{\hat t}) \right\|_{\mathbb Y}^{-1} \lim_{\mathbf t \to \mathbf 0_{\mathbb X}} \frac{o(\phi(\mathbf t) - o_1(\mathbf t))}{\| \mathbf t \|_{\mathbb X}}.
\end{aligned}
$$
Thus, $o(\phi(\mathbf t) - o_1(\mathbf t)) = o_3(\mathbf t)$ as $\mathbf t \to \mathbf 0_{\mathbb X}$.

Now, we have
$$
g(f(\mathbf p + \mathbf t)) = g(f(\mathbf t)) + \lambda(\phi(\mathbf t)) + o_2(\mathbf t) + o_3(\mathbf t),
$$
as $\mathbf t \to \mathbf 0_{\mathbb X}$, where $o_2(\mathbf t) + o_3(\mathbf t) = o_4(\mathbf t)$ as $\mathbf t \to \mathbf 0_{\mathbb X}$. Thus, $g \circ f$ is differentiable at $\mathbf p$.

Q.E.D.

## Directional Derivatives











#### Theorem

Let $\mathrm d:$ be defined as
$$
\mathrm d_{\mathbf u, \mathbf p}(\mathbf f) := \nabla_{\mathbf u} \mathbf f(\mathbf p).
$$
Then $\mathrm d_{\mathbf u, \mathbf p}$ is linear.

**Proof.** First, we have
$$
\begin{aligned}
g(\mathbf v + \mathbf w) = \frac{f(\mathbf p + t\mathbf v + t\mathbf w) - f(\mathbf p) - }{t}
\end{aligned}
$$
For any $s \in \mathbb R$ and for any $\mathbf f_1$, we have
$$
\begin{aligned}
s\mathrm d_{\mathbf u, \mathbf p}(\mathbf f_1) &= \lim_{t \to 0} \frac{s\mathbf f_1(\mathbf p + t \mathbf u) - s\mathbf f_1(\mathbf p)}{t} \\
&= \nabla_{\mathbf u} s\mathbf f_1(\mathbf p) \\
&= \mathrm d_{\mathbf u, \mathbf p}(s\mathbf f_1).
\end{aligned}
$$
Thus, $\mathrm d_{\mathbf u, \mathbf p}$ is linear.

Q.E.D.

#### Definition: Jacobian

Let $\mathbb X = (X, \|\cdot\|_\mathbb X)$ where $X=\mathbb K^m$, and let $\mathbb Y=(Y, \|\cdot\|_\mathbb Y)$, where $Y = \mathbb K^n$.

Let $\mathbf f: \mathbb X \to \mathbb Y: \mathbf x \mapsto \mathbf f(\mathbf x)$ be differentiable at point $\mathbf p \in \mathbb X$.

The *Jacobian of $f$ at $\mathbf p$* is an $n \times m$ matrix defined as

$$
\begin{aligned}
\nabla \mathbf f(\mathbf p) :=
\left[
\begin{matrix}
\displaystyle\frac{\partial}{\partial x_1} f_1(\mathbf p) & \cdots & \displaystyle \frac{\partial}{\partial x_1} f_n(\mathbf p) \\
\vdots & \ddots & \vdots \\
\displaystyle\frac{\partial}{\partial x_m} f_1(\mathbf p) & \cdots & \displaystyle\frac{\partial}{\partial x_m} f_n(\mathbf p)
\end{matrix}
\right].
\end{aligned}
$$

#### Note: Consider $\nabla$

$\nabla$ can be considered as an $1 \times n$ matrix. If so, $\nabla \mathbf f(\mathbf p)$ can be considered as the multiplication between matrices:
$$
\nabla \mathbf f(\mathbf p) =
\left[
\begin{matrix}
\displaystyle \frac{\partial}{\partial x_1} \\
\vdots \\
\displaystyle \frac{\partial}{\partial x_n}
\end{matrix}
\right]
\left[
\begin{matrix}
f_1(\mathbf p) & \cdots & f_n(\mathbf p)
\end{matrix}
\right].
$$

#### Theorem: Chain Rule

Let $\mathbb X = (X, \| \cdot \|_{\mathbb X})$, $\mathbb Y = (Y, \| \cdot \|_{\mathbb Y})$, and $\mathbb M = (M, \| \cdot \|_{\mathbb M})$.

Let $f: \mathbb X \to \mathbb Y$ and $g: \mathbb Y \to \mathbb M$.

If $f$ is differentiable at a point $\mathbf p \in \mathbb X$ and $g$ is differentiable at $f(\mathbf p)$, then for any $\mathbf u \in \mathbb X \setminus \{ \mathbf 0_{\mathbb X} \}$, we have
$$
\nabla_{\mathbf u} g(f(\mathbf p)) = \nabla g(f(\mathbf p)) \nabla_{\mathbf u} f(\mathbf p).
$$
**Proof.** By <u>Theorem: Differentiability of Composed Mappings</u>, $g \circ f$ is differentiable at $\mathbf p$, so
$$
\begin{aligned}
\nabla_{\mathbf u} g(f(\mathbf p)) &= \lim_{t \to 0} \frac{g(f(\mathbf p + t\mathbf u)) - g(f(\mathbf p))}{t} \\
&= \lim_{t \to 0} \frac{g(f(\mathbf p)) + \lambda(\Delta f) + o(\Delta f) - g(f(\mathbf p))}{t}
\end{aligned}
$$
where
$$
\lambda(\Delta f) = \lambda(\phi(\mathbf t)) + \lambda(o_1(\mathbf t))
$$
and
$$
o(\Delta f) = o(\mathbf t)
$$
Then
$$
\begin{aligned}
\nabla_{\mathbf u} g(f(\mathbf p)) &= \lim_{t \to 0} \frac{\lambda(\phi(t \mathbf u)) + o(t\mathbf u)}{t} \\
&= \lambda(\phi(\mathbf u)) \\
&= \lambda(\nabla_{\mathbf u} f(\mathbf p)) \\
\end{aligned}
$$










---

#### Lemma: Multiplication between Transposed Vector and  Jacobian

Let $\mathbb X = (X, \|\cdot\|_\mathbb X)$ where $X=\mathbb K^m$, and let $\mathbb Y=(Y, \|\cdot\|_\mathbb Y)$, where $Y = \mathbb K^n$.

Let $\mathbf f: \mathbb X \to \mathbb Y: \mathbf x \mapsto \mathbf f(\mathbf x)$ be differentiable at point $\mathbf p \in \mathbb X$.

Then, for any $\mathbf u \in \mathbb X \setminus \{ \mathbf 0_{\mathbb X } \}$, we have
$$
\nabla_{\mathbf u} \mathbf f(\mathbf p) = \mathbf u^{\top} \nabla \mathbf f(\mathbf p).
$$
**Proof.**








$$
\begin{aligned}
\mathbf u^\top \nabla \mathbf f(\mathbf p) &=
\left[
\begin{matrix}
u_1 & \cdots & u_m
\end{matrix}
\right]
\left[
\begin{matrix}
\displaystyle \frac{\partial}{\partial x_1} \\
\vdots \\
\displaystyle \frac{\partial}{\partial x_m}
\end{matrix}
\right]
\left[
\begin{matrix}
f_1(\mathbf p) & \cdots & f_n(\mathbf p)
\end{matrix}
\right] \\
&= \left[ \sum_{i = 1}^m u_i\frac{\partial}{\partial x_i} \right]
\left[
\begin{matrix}
f_1(\mathbf p) & \cdots & f_n(\mathbf p)
\end{matrix}
\right] \\
&= \left[ \sum_{i = 1}^m \nabla_{u_i \mathbf{\hat e}_i} \right]\left[
\begin{matrix}
f_1(\mathbf p) & \cdots & f_n(\mathbf p)
\end{matrix}
\right].
\end{aligned}
$$

$$
\begin{aligned}
\nabla_{\mathbf u} &= 
\end{aligned}
$$









