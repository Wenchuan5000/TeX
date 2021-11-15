<hr
	id = "artInfo"
	lang = "zh"
>
# 可微分映射

## 定义推导

微积分中所有的问题都存在明确的几何意义，而提及一个函数是否是可微分的时候尤其如此，它的严格定义无非是对我们对于一个造型是否是光滑的这一直观感受的精确描述和空间上的推广。

假设我们有一个函数 $f: \mathbb R^2 \to \mathbb R$。我们假设，在某一点 $\mathbf p \in \mathbb R^2$ 上，$f$ 是光滑的，那么，我们要如何描述这种光滑的感受？

直观角度来看，$f$ 在 $\mathbf p$ 点处是光滑的，意味着如果我们将 $f(\mathbf p)$ 附近的细节不断放大，最后，这部分的细节将趋于一个平面。换言之，这种放大过程的极限是一个平面。当然，一个点是无法构成一个平面或者曲面的，因此，$f$ 在 $\mathbf p$ 点处是光滑的，其实是在说，$f$ 在 $\mathbf p$ 点的某一个领域上是光滑的。

在度量空间中，所有开球都是开集，也因此是开球中的任何一点的领域。因此，$f$ 在 $\mathbf p$ 点处是光滑的，当且仅当存在一个 $\delta \in \mathbb R_{> 0}$，使得 $f$ 在 $B(\mathbf p, \delta)$ 上是光滑的。这里，我们以 $B(\mathbf p, \delta)$ 表示一个以 $\mathbf p$ 点为中心，以 $\delta$ 为半径的开球。因此，$f$ 在 $\mathbf p$ 点处的光滑就意味着，当 $\delta$ 趋近于 $0$ 时，$f[B(\mathbf p, \delta)]$ 将趋紧与一个平面。我们使 $P: \mathbb R^2 \to \mathbb R$ 为描述这个平面的映射，于是便可以将上述关系描述为
$$
\lim_{\delta \to 0}f[B(\mathbf p, \delta)] = \lim_{\delta \to 0} P[B(\mathbf p, \delta)].
$$
我们以元素来考虑这个等式，则对于任何 $\mathbf t \in \mathbb R^2$ 满足 $\mathbf p + \mathbf t \in B(\mathbf p, \delta)$，
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^2}} f(\mathbf p + \mathbf t) = \lim_{\mathbf t \to \mathbf 0_{\mathbb R^2}} P(\mathbf p + \mathbf t).
$$
我们知道，$\mathbb R^2 \times \mathbb R$ 中的任何一个平面，都可以通过平移一个线性函数而获得。因此，一定存在一个线性函数 $\phi:\mathbb R^2 \to \mathbb R$，使得
$$
P(\mathbf p + \mathbf t) = \phi(\mathbf p + \mathbf t - \mathbf p) + f(\mathbf p) .
$$
由此，我们得到
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^2}} f(\mathbf p + \mathbf t) = \lim_{\mathbf t \to \mathbf 0_{\mathbb R^2}} \phi(\mathbf t) + f(\mathbf p).
$$
我们将 $f(\mathbf p)$ 移至等式的左侧，并且考虑这样一个极限
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^2}} \frac{f(\mathbf p + \mathbf t) - f(\mathbf p)}{\| \mathbf t \|_{\mathbb R^2}} = \lim_{\mathbf t \to \mathbf 0_{\mathbb R^2}} \frac{\phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^2}}.
$$
由于 $\phi$ 是线性的，因此等式的右侧实际上为一个常量 $\phi(\mathbf{\hat t})$。由此，我们确定等式两侧的极限都存在于 $\mathbb R$ 中。最后，我们将等式中的所有项都移动到一侧，便得到了
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^2}}\frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^2}} = 0.
$$
这个等式为我们最终描述了 $f:\mathbb R^2 \to \mathbb R$ 在 $\mathbf p$ 点处的光滑。在微积分中，我们便将这种意义上的光滑称作在 $\mathbf p$ 点处是可微分。

当我们将函数 $f$ 的域空间拓展为任意有限维度 $\mathbb R^m$，即使 $f: \mathbb R^m \to \mathbb R$，于是，我们称 $f$ 在 $\mathbf p \in \mathbb R^n$ 处是可微分的，当且仅当存在一个线性映射 $\phi: \mathbb R^m \to \mathbb R$，对于任何 $\mathbf t \in \mathbb R^n$，
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \frac{f(\mathbf p + \mathbf t) - f(\mathbf t) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = 0.
$$
如果 $f$ 的上域同样是一个任意有限维度 $\mathbb R^n$，那事情则简单得多。我们设想 $f = (f_1, \ldots, f_n)$，其中，对于任何 $i \in \{1, \ldots, n\}$，$f_i$ 都是 $f$ 的第 $i$ 个因子函数，换言之
$$
\mathbf x \mapsto f(\mathbf x) =
\left[
\begin{matrix}
f_1(\mathbf x) \\
\vdots \\
f_n(\mathbf x)
\end{matrix}
\right].
$$
此时，我们称 $f$ 在 $\mathbf p \in \mathbb R^n$ 上是可微分的，当且仅当对于任何 $i \in \{1, \ldots, n\}$，$f_i$ 都是可微分的；即，对于任何 $i$，都存在一个线性函数 $\phi_i:\mathbb R^m \to \mathbb R^n$，满足
$$
\sum_{i = 1}^n \lim_{\mathbf t \to \mathbf 0_{\mathbb R^m}} \frac{f_i(\mathbf p + \mathbf t) - f_i(\mathbf t) - \phi_i(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}}\mathbf{\hat e}_i = \mathbf 0_{\mathbb R^n},
$$
此处，我们以 $\mathbf{\hat e}_i$ 表示上域空间 $\mathbb R^n$ 的第 $i$ 个基向量。根据向量的加法，我们得到
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^n}} \frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \mathbf 0_{\mathbb R^n},
$$
其中，$\phi(\mathbf t) = \sum_{i = 1}^n \phi_i(\mathbf t)$。由此，我们便得到了可微分映射的定义。

#### 定义

> 可微分映射

使 $f: \mathbb R^m \to \mathbb R^n$，并且使 $\mathbf p \in \mathbb R^m$。我们称 $f$ 在 $\mathbf p$ 点处<u>可微分</u>（differetiable），当且仅当存在一个线性映射 $\phi: \mathbb R^m \to \mathbb R^n$，使得对于任何 $\mathbf t \in \mathbb R^m$，
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^n}} \frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \mathbf 0_{\mathbb R^n}.
$$

---

即然这个定义中提到了极限，那么让我们来回忆一个极限的基本定理。对于任何 $f: \mathbb R^m \to \mathbb R^n$，$f$ 在某一点 $\mathbf p$ 处存在极限 $\mathbf q \in \mathbb R^n$，当且仅当存在一个映射 $\alpha: \mathbb R^m \to \mathbb R^n$，其满足当 $\mathbf t \to \mathbf p$ 时 $\alpha(\mathbf t) \to \mathbf 0_{\mathbb R^n}$，使得存在一个 $\mathbf p$ 的领域 $N$，使得对于任何 $\mathbf t \in U$，
$$
f(\mathbf t) = \lim_{\mathbf t \to \mathbf p} f(\mathbf t) + \alpha(\mathbf t).
$$
这是一个非常直接的结论，因此，在这本小册子中，有时候，当我提到可微分映射的定义的时候，我会直接引述这个结论。

---

#### 引理

在上述定义中，线性函数 $\phi$ 是唯一的。

**证明.** 当 $f$ 在 $\mathbf p$ 点处可微分时，存在一个映射 $\alpha: \mathbb R^m \to \mathbb R^n$ 满足

