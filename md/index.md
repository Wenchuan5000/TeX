<hr
	id = "artInfo"
	lang = "zh"
>

# 微分

## 可微分映射

#### 定义

> 可微分映射

使 $f: \mathbb R^m \to \mathbb R^n$，并且使 $\mathbf p \in \mathbb R^m$。我们称 $f$ 在 $\mathbf p$ 点处<u>可微分</u>，当且仅当存在一个线性映射 $\phi: \mathbb R^m \to \mathbb R^n$，使得对于任何 $\mathbf t \in \mathbb R^m$，
$$
\lim_{\mathbf t \to \mathbf 0_{\mathbb R^n}} \frac{f(\mathbf p + \mathbf t) - f(\mathbf p) - \phi(\mathbf t)}{\| \mathbf t \|_{\mathbb R^m}} = \mathbf 0_{\mathbb R^n}.
$$

---

==即然这个定义中提到了极限==（limit），那么让我们来回忆一个极限的基本定理。对于任何 $f: \mathbb R^m \to \mathbb R^n$，$f$ 在某一点 $\mathbf p$ 处存在极限 $\mathbf q \in \mathbb R^n$，当且仅当存在一个映射 $\alpha: \mathbb R^m \to \mathbb R^n$，其满足当 $\mathbf t \to \mathbf p$ 时 $\alpha(\mathbf t) \to \mathbf 0_{\mathbb R^n}$，使得存在一个开子集 $U \subseteq \mathbb R^m$ 满足 $\mathbf p \in U$，使得对于任何 $\mathbf t \in U$，
$$
f(\mathbf t) = \lim_{\mathbf t \to \mathbf p} f(\mathbf t) + \alpha(\mathbf t).
$$
这是一个非常直接的结论，因此，在这本小册子中，有时候，当我提到可微分映射的定义的时候，我会直接引述这个结论。

---

#### 引理

在上述定义中，线性函数 $\phi$ 是唯一的。

**证明.** 当 $f$ 在 $\mathbf p$ 点处可微分时，存在一个映射 $\alpha: \mathbb R^m \to \mathbb R^n$ 满足

