import{r as t,c as e,a as n,b as p,F as o,d as s,f as c,o as l}from"./app.86e6e0b1.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";var i="/assets/image-20220718184103453.21049d76.png";const r={},k=n("h1",{id:"axios",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#axios","aria-hidden":"true"},"#"),s(" Axios")],-1),d=s("Axios \u662F\u4E00\u4E2A\u57FA\u4E8E "),b={href:"https://javascript.info/promise-basics",target:"_blank",rel:"noopener noreferrer"},m=s("promise"),h=s(" \u7F51\u7EDC\u8BF7\u6C42\u5E93\uFF0C\u4F5C\u7528\u4E8E"),f={href:"https://nodejs.org/",target:"_blank",rel:"noopener noreferrer"},g=n("code",null,"node.js",-1),x=s(" \u548C\u6D4F\u89C8\u5668\u4E2D\u3002 \u5B83\u662F "),_={href:"https://www.lullabot.com/articles/what-is-an-isomorphic-application",target:"_blank",rel:"noopener noreferrer"},y=s("isomorphic"),q=s(" \u7684(\u5373\u540C\u4E00\u5957\u4EE3\u7801\u53EF\u4EE5\u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u548C node.js \u4E2D)\u3002\u5728\u670D\u52A1\u7AEF\u5B83\u4F7F\u7528\u539F\u751F node.js "),w=n("code",null,"http",-1),v=s(" \u6A21\u5757, \u800C\u5728\u5BA2\u6237\u7AEF (\u6D4F\u89C8\u7AEF) \u5219\u4F7F\u7528 XMLHttpRequests\u3002"),j=n("h2",{id:"\u7279\u6027",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u7279\u6027","aria-hidden":"true"},"#"),s(" \u7279\u6027")],-1),A=s("\u4ECE\u6D4F\u89C8\u5668\u521B\u5EFA "),E={href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",target:"_blank",rel:"noopener noreferrer"},I=s("XMLHttpRequests"),M=s("\u4ECE node.js \u521B\u5EFA "),P={href:"http://nodejs.org/api/http.html",target:"_blank",rel:"noopener noreferrer"},R=s("http"),F=s(" \u8BF7\u6C42"),N=s("\u652F\u6301 "),S={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",target:"_blank",rel:"noopener noreferrer"},T=s("Promise"),L=s(" API"),C=n("li",null,[n("p",null,"\u62E6\u622A\u8BF7\u6C42\u548C\u54CD\u5E94")],-1),H=n("li",null,[n("p",null,"\u8F6C\u6362\u8BF7\u6C42\u548C\u54CD\u5E94\u6570\u636E")],-1),X=n("li",null,[n("p",null,"\u53D6\u6D88\u8BF7\u6C42")],-1),V=n("li",null,[n("p",null,"\u81EA\u52A8\u8F6C\u6362 JSON \u6570\u636E")],-1),z=s("\u5BA2\u6237\u7AEF\u652F\u6301\u9632\u5FA1"),B={href:"http://en.wikipedia.org/wiki/Cross-site_request_forgery",target:"_blank",rel:"noopener noreferrer"},G=s("XSRF"),O=c(`<h2 id="axios-api" tabindex="-1"><a class="header-anchor" href="#axios-api" aria-hidden="true">#</a> Axios API</h2><p>\u53EF\u4EE5\u5411 <code>axios</code> \u4F20\u9012\u76F8\u5173\u914D\u7F6E\u6765\u521B\u5EFA\u8BF7\u6C42</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code>// \u53D1\u8D77\u4E00\u4E2Apost\u8BF7\u6C42 axios({ method: &#39;post&#39;, url: &#39;/user/12345&#39;, data: {
firstName: &#39;Fred&#39;, lastName: &#39;Flintstone&#39; } });
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u5728 node.js \u7528GET\u8BF7\u6C42\u83B7\u53D6\u8FDC\u7A0B\u56FE\u7247
axios({
  method: &#39;get&#39;,
  url: &#39;http://bit.ly/2mTM3nY&#39;,
  responseType: &#39;stream&#39;
})
  .then(function (response) {
    response.data.pipe(fs.createWriteStream(&#39;ada_lovelace.jpg&#39;))
  });
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h5 id="axios-url-config" tabindex="-1"><a class="header-anchor" href="#axios-url-config" aria-hidden="true">#</a> axios(url[, config])</h5><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>// \u53D1\u8D77\u4E00\u4E2A GET \u8BF7\u6C42 (\u9ED8\u8BA4\u8BF7\u6C42\u65B9\u5F0F)
axios(&#39;/user/12345&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u8BF7\u6C42\u65B9\u5F0F\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u8BF7\u6C42\u65B9\u5F0F\u522B\u540D" aria-hidden="true">#</a> \u8BF7\u6C42\u65B9\u5F0F\u522B\u540D</h3><p>\u4E3A\u4E86\u65B9\u4FBF\u8D77\u89C1\uFF0C\u5DF2\u7ECF\u4E3A\u6240\u6709\u652F\u6301\u7684\u8BF7\u6C42\u65B9\u6CD5\u63D0\u4F9B\u4E86\u522B\u540D\u3002</p><h5 id="axios-request-config" tabindex="-1"><a class="header-anchor" href="#axios-request-config" aria-hidden="true">#</a> axios.request(config)</h5><h5 id="axios-get-url-config" tabindex="-1"><a class="header-anchor" href="#axios-get-url-config" aria-hidden="true">#</a> axios.get(url[, config])</h5><h5 id="axios-delete-url-config" tabindex="-1"><a class="header-anchor" href="#axios-delete-url-config" aria-hidden="true">#</a> axios.delete(url[, config])</h5><h5 id="axios-head-url-config" tabindex="-1"><a class="header-anchor" href="#axios-head-url-config" aria-hidden="true">#</a> axios.head(url[, config])</h5><h5 id="axios-options-url-config" tabindex="-1"><a class="header-anchor" href="#axios-options-url-config" aria-hidden="true">#</a> axios.options(url[, config])</h5><h5 id="axios-post-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-post-url-data-config" aria-hidden="true">#</a> axios.post(url[, data[, config]])</h5><h5 id="axios-put-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-put-url-data-config" aria-hidden="true">#</a> axios.put(url[, data[, config]])</h5><h5 id="axios-patch-url-data-config" tabindex="-1"><a class="header-anchor" href="#axios-patch-url-data-config" aria-hidden="true">#</a> axios.patch(url[, data[, config]])</h5><h6 id="\u6CE8\u610F" tabindex="-1"><a class="header-anchor" href="#\u6CE8\u610F" aria-hidden="true">#</a> \u6CE8\u610F</h6><p>\u5728\u4F7F\u7528\u522B\u540D\u65B9\u6CD5\u65F6\uFF0C <code>url</code>\u3001<code>method</code>\u3001<code>data</code> \u8FD9\u4E9B\u5C5E\u6027\u90FD\u4E0D\u5FC5\u5728\u914D\u7F6E\u4E2D\u6307\u5B9A\u3002</p><h2 id="\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7248-axios" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7248-axios" aria-hidden="true">#</a> \u5B9E\u73B0\u4E00\u4E2A\u7B80\u5355\u7248 Axios</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">Axios</span> <span class="token punctuation">{</span>
  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5B9E\u73B0axios.interceptors.response.use\u548Caxios.interceptors.request.use</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors <span class="token operator">=</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">request</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InterceptorsManage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token literal-property property">response</span><span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">InterceptorsManage</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">request</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*
            \u5148\u662F mergeConfig ... \u7B49\uFF0C\u4E0D\u518D\u9610\u8FF0
  		*/</span>
    <span class="token comment">// Hook up interceptors middleware \u521B\u5EFA\u62E6\u622A\u5668\u94FE. dispatchRequest \u662F\u91CD\u4E2D\u4E4B\u91CD\uFF0C\u540E\u7EED\u91CD\u70B9</span>
    <span class="token comment">//   dispatchRequest===this.sendAjax.bind(this)</span>
    <span class="token keyword">let</span> chain <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sendAjax</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token comment">//    \u8BF7\u6C42\u62E6\u622A</span>
    <span class="token comment">// push\u5404\u4E2A\u62E6\u622A\u5668\u65B9\u6CD5 \u6CE8\u610F\uFF1Ainterceptor.fulfilled \u6216 interceptor.rejected \u662F\u53EF\u80FD\u4E3Aundefined</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span>handlers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">interceptors</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u8BF7\u6C42\u62E6\u622A\u5668\u9006\u5E8F \u6CE8\u610F\u6B64\u5904\u7684 forEach \u662F\u81EA\u5B9A\u4E49\u7684\u62E6\u622A\u5668\u7684forEach\u65B9\u6CD5</span>
      chain<span class="token punctuation">.</span><span class="token function">unshift</span><span class="token punctuation">(</span>interceptors<span class="token punctuation">.</span>fullfield<span class="token punctuation">,</span> interceptors<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u54CD\u5E94\u62E6\u622A</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span>handlers<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">interceptors</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u54CD\u5E94\u62E6\u622A\u5668\u987A\u5E8F \u6CE8\u610F\u6B64\u5904\u7684 forEach \u662F\u81EA\u5B9A\u4E49\u7684\u62E6\u622A\u5668\u7684forEach\u65B9\u6CD5</span>
      chain<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>interceptors<span class="token punctuation">.</span>fullfield<span class="token punctuation">,</span> interceptors<span class="token punctuation">.</span>rejected<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u521D\u59CB\u5316\u4E00\u4E2Apromise\u5BF9\u8C61\uFF0C\u72B6\u6001\u4E3Aresolved\uFF0C\u63A5\u6536\u5230\u7684\u53C2\u6570\u4E3A\u5DF2\u7ECF\u5904\u7406\u5408\u5E76\u8FC7\u7684config\u5BF9\u8C61</span>
    <span class="token comment">// \u6267\u884C\u961F\u5217\uFF0C\u6BCF\u6B21\u6267\u884C\u4E00\u5BF9\uFF0C\u5E76\u7ED9promise\u8D4B\u6700\u65B0\u7684\u503C</span>
    <span class="token keyword">let</span> promise <span class="token operator">=</span> Promise<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// \u5FAA\u73AF\u62E6\u622A\u5668\u7684\u94FE</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>chain<span class="token punctuation">.</span>length <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      promise <span class="token operator">=</span> promise<span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span>chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> chain<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6BCF\u4E00\u6B21\u5411\u5916\u5F39\u51FA\u62E6\u622A\u5668</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> promise<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">sendAjax</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> <span class="token punctuation">{</span> url <span class="token operator">=</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span> method <span class="token operator">=</span> <span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> data <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span> <span class="token operator">=</span> config<span class="token punctuation">;</span>
      <span class="token keyword">const</span> xhr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">XMLHttpRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      xhr<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>method<span class="token punctuation">,</span> url<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      xhr<span class="token punctuation">.</span><span class="token function-variable function">onload</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">resolve</span><span class="token punctuation">(</span>xhr<span class="token punctuation">.</span>responseText<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      xhr<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><p>\u5C06 Axios.prototype \u4E0A\u7684\u65B9\u6CD5\u642C\u8FD0\u5230 request \u4E0A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">CreateAxiosFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> axios <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Axios</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> req <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>axios<span class="token punctuation">)</span><span class="token punctuation">;</span>
  utils<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> <span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">,</span> axios<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token comment">// \u5F53\u6267\u884Caxios.interceptors.response.use\u548Caxios.interceptors.request.use\u7684\u65F6\u5019\uFF0C\u5B9E\u73B0\u83B7\u53D6axios\u5B9E\u4F8B\u4E0A\u7684interceptors\u5BF9\u8C61\uFF0C\u7136\u540E\u83B7\u53D6response\u6216request\u62E6\u622A\u5668\uFF0C\u518D\u6267\u884C\u5BF9\u5E94\u7684\u62E6\u622A\u5668\u7684use\u65B9\u6CD5</span>
  utils<span class="token punctuation">.</span><span class="token function">extend</span><span class="token punctuation">(</span>req<span class="token punctuation">,</span> axios<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">return</span> req<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">let</span> axios <span class="token operator">=</span> <span class="token function">CreateAxiosFn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> methodArr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;delete&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;options&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;put&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;patch&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;post&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
methodArr<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">met</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token class-name">Axios</span><span class="token punctuation">.</span>prototype<span class="token punctuation">[</span>met<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;\u6267\u884C&quot;</span> <span class="token operator">+</span> met <span class="token operator">+</span> <span class="token string">&quot;\u65B9\u6CD5&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;get&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;delete&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;head&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;options&quot;</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span>met<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> met<span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        <span class="token literal-property property">method</span><span class="token operator">:</span> met<span class="token punctuation">,</span>
        <span class="token literal-property property">url</span><span class="token operator">:</span> arguments<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
        <span class="token literal-property property">data</span><span class="token operator">:</span> arguments<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token operator">...</span><span class="token punctuation">(</span>arguments<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">||</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u9996\u5148\u5B9E\u73B0\u4E00\u4E2A\u5DE5\u5177\u7C7B\uFF0C\u5B9E\u73B0\u5C06b\u65B9\u6CD5\u6DF7\u5165a\uFF0C\u5E76\u4E14\u4FEE\u6539this\u6307\u5411</span>
<span class="token keyword">const</span> utils <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">extend</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> b<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>b<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> b<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&quot;function&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          a<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          a<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> b<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6784\u5EFA\u62E6\u622A\u5668\u7684\u6784\u9020\u51FD\u6570</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class InterceptorsManage{
    constructor(){
        this.handlers=[]
    }
    use(fullfield,rejected){
        this.handlers.push({
            fullfield,
            rejected
        })
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h1 id="\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u5C0F\u7ED3" aria-hidden="true">#</a> \u5C0F\u7ED3</h1><p><img src="`+i+'" alt="image-20220718184103453" loading="lazy"></p><p>\u53C2\u8003\u6587\u732E\uFF1Ahttps://cloud.tencent.com/developer/article/1794288</p>',28);function W(J,U){const a=t("ExternalLinkIcon");return l(),e(o,null,[k,n("p",null,[d,n("em",null,[n("a",b,[m,p(a)])]),h,n("a",f,[g,p(a)]),x,n("em",null,[n("a",_,[y,p(a)])]),q,w,v]),j,n("ul",null,[n("li",null,[n("p",null,[A,n("a",E,[I,p(a)])])]),n("li",null,[n("p",null,[M,n("a",P,[R,p(a)]),F])]),n("li",null,[n("p",null,[N,n("a",S,[T,p(a)]),L])]),C,H,X,V,n("li",null,[n("p",null,[z,n("a",B,[G,p(a)])])])]),O],64)}var K=u(r,[["render",W],["__file","Axios\u539F\u7406.html.vue"]]);export{K as default};
