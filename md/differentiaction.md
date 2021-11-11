## Differentiable Mappings

#### <span id="def_differentiable">Definition</span>

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
Thus, in the notes below, the assertion there exists some $\alpha: \mathbb R^m \to \mathbb R^n$ with $\alpha(\mathbf t) \to \mathbf 0_{\mathbb R^n}$ as $\mathbf t \to \mathbf 0_{\mathbb R^m}$, such that there exists an open subset $U \subseteq \mathbb R^m$ with $\mathbf p \in U$, such that for any $\mathbf t \in \mathbb R^n$ with $\mathbf p + \mathbf t \in U$,
$$
\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \mathbf 0_{\mathbb R^n}
$$
is straightly used as equivalent as [REF][#def_differentiable] when it is refered sometime.

---

#### <span id="lm_differentiable-uniquenessOfPhi">Lemma</span>

The linear map $\phi$ in [REF](#def_differentiable) is unique.

##### Proof.

As $f$ is differentiable at $\mathbf p$, there exists an $\alpha: \mathbb R^m \to \mathbb R^n$ with $\alpha(\mathbf t) \to \mathbf 0_{\mathbb R^n}$, such that there exists an open subset $U \subseteq \mathbb R^m$ with $\mathbf p \in U$, such that for any $\mathbf t \in \mathbb R^n$ with $\mathbf p + \mathbf t \in U$,
$$
\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\|\mathbf t\|_{\mathbb R^m}} = \alpha(\mathbf t).
$$
Assume [REF](#def_differentiable) holds for another linear mapping $\lambda$ also, then, similarly, there exists a $\beta: \mathbb R^m \to \mathbb R^n$ with $\beta(\mathbf t) = \mathbf 0_{\mathbb R^n}$, such that there exists an open subset $U' \subseteq \mathbb R^m$ with $\mathbf p \in U'$, such that for any $\mathbf t \in \mathbb R^n$ with $\mathbf p + \mathbf t \in U'$,
$$
\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \lambda(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \beta(\mathbf t).
$$
