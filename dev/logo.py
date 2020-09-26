import numpy as np
import matplotlib
import matplotlib.pyplot as plt
import matplotlib
from scipy import stats as stats

matplotlib.rcParams["axes.facecolor"] = "#23272E"
matplotlib.rcParams["figure.facecolor"] = "#23272E"
matplotlib.rcParams["axes.grid"] = False

gaussian = lambda x, mu=0, sigma=1: stats.norm(mu, sigma).pdf(x)

x = np.linspace(-10, 10, 1000)
g0 = gaussian(x, 0, 0.92)

fig = plt.figure(figsize=(10, 10))
ax = fig.add_subplot()
ax.set_xlim(-4, 4)
ax.set_ylim(-4, 4)
ax.axis("off")

yshift = -3.0
yscale = 14
plt.plot(x, yscale * g0 + yshift, c="#5E81AC", lw=100)

plt.savefig("../public/logo.svg", dpi=400)
