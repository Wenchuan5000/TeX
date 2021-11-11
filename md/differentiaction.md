# Differentiation

## <a id="sec_differentiableMappings">Differentiable Mappings</a>

#### <a id="def_differentiable" name="Differentiable Mappings">Definition</a>

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

#### <a id="lm_differentiable-uniquenessOfPhi">Lemma</a>

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

#### <a id="lm_differentiable-impliesContinuous">Lemma</a>

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

## <a id="sec_directionalDerivatives">Directional Derivatives</a>

#### <a id="def_directionalDerivatives" name="Directional Derivatives">Definition</a>

Let $f: \mathbb R^m \to \mathbb R^n$, let $\mathbf u \in \mathbb R^m \setminus \{ \mathbf 0_{\mathbb R^m} \}$, and let $\mathbf p \in \mathbb R^m$. The *directional derivative* of $f$ along $\mathbf u$ at $\mathbf p$ is defined as
$$
\nabla_{\mathbf u} f(\mathbf p) := \lim_{t \to 0} \frac{f(\mathbf p + t\mathbf u) - f(\mathbf p)}{t},
$$
if the limit exists in $\mathbb R^n$.

---

#### <a id="lm_directionalDerivatives-existsImpliesRelativeContinuous" name="Directional Derivatives">Lemma</a>

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

It is easy to find that $g$ is bijective, thus $g^{-1}$ is also bijective. Thus, $g \circ g^{-1}$ is an identity mapping on $g[\mathbb R] \subseteq \mathbb R^m$. As composition of mappings is associative, we have
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

#### <a id="lm_directionalDerivatives-scalaMultiplication" name="Directional Derivatives">Lemma</a>

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

## <a id="sec_partialDerivatives">Partial Derivatives</a>

