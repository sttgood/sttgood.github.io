import{_ as s,o as n,c as l,a,d as p,f as o}from"./app-60c8e404.js";const e="/assets/image-20230825224915770-0777829e.png",B={},c=p("p",null,"模态框基础js原理",-1),t=o('<p>图示：</p><figure><img src="'+e+`" alt="image-20230825224915770" tabindex="0" loading="lazy"><figcaption>image-20230825224915770</figcaption></figure><div class="language-html line-numbers-mode" data-ext="html"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#ABB2BF;">&lt;!</span><span style="color:#E06C75;">DOCTYPE</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">lang</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;en&quot;</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">charset</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;UTF-8&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">http-equiv</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;X-UA-Compatible&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">content</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;IE=edge&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">meta</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">name</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;viewport&quot;</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">content</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;width=device-width, initial-scale=1.0&quot;</span><span style="color:#ABB2BF;"> /&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;面向对象封装消息提示&lt;/</span><span style="color:#E06C75;">title</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.modal</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      width: </span><span style="color:#D19A66;">300</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      min-height: </span><span style="color:#D19A66;">100</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      box-shadow: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">rgba</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0.2</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      border-radius: </span><span style="color:#D19A66;">4</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      position: </span><span style="color:#D19A66;">fixed</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      z-index: </span><span style="color:#D19A66;">999</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      left: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      top: </span><span style="color:#D19A66;">50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      transform: </span><span style="color:#56B6C2;">translate3d</span><span style="color:#ABB2BF;">(</span><span style="color:#D19A66;">-50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">-50</span><span style="color:#E06C75;">%</span><span style="color:#ABB2BF;">, </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"><span style="color:#ABB2BF;">      background-color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.modal</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.header</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      line-height: </span><span style="color:#D19A66;">40</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      padding: </span><span style="color:#D19A66;">0</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      position: </span><span style="color:#D19A66;">relative</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      font-size: </span><span style="color:#D19A66;">20</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.modal</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.header</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">i</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      font-style: </span><span style="color:#D19A66;">normal</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      color: </span><span style="color:#D19A66;">#999</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      position: </span><span style="color:#D19A66;">absolute</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      right: </span><span style="color:#D19A66;">15</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      top: </span><span style="color:#D19A66;">-2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      cursor: </span><span style="color:#D19A66;">pointer</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.modal</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.body</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      text-align: </span><span style="color:#D19A66;">center</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      padding: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.modal</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.footer</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      display: </span><span style="color:#D19A66;">flex</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      justify-content: </span><span style="color:#D19A66;">flex-end</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      padding: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.modal</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.footer</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">a</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      padding: </span><span style="color:#D19A66;">3</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">8</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      background: </span><span style="color:#D19A66;">#ccc</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      text-decoration: </span><span style="color:#D19A66;">none</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      color: </span><span style="color:#D19A66;">#fff</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      border-radius: </span><span style="color:#D19A66;">2</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      margin-right: </span><span style="color:#D19A66;">10</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">      font-size: </span><span style="color:#D19A66;">14</span><span style="color:#E06C75;">px</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#D19A66;">.modal</span><span style="color:#C678DD;"> </span><span style="color:#D19A66;">.footer</span><span style="color:#C678DD;"> </span><span style="color:#E06C75;">a</span><span style="color:#D19A66;">.submit</span><span style="color:#ABB2BF;"> {</span></span>
<span class="line"><span style="color:#ABB2BF;">      background-color: </span><span style="color:#D19A66;">#369</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">style</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">head</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;delete&quot;</span><span style="color:#ABB2BF;">&gt;删除&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;"> </span><span style="color:#D19A66;">id</span><span style="color:#ABB2BF;">=</span><span style="color:#98C379;">&quot;login&quot;</span><span style="color:#ABB2BF;">&gt;登录&lt;/</span><span style="color:#E06C75;">button</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;">&lt;!-- &lt;div class=&quot;modal&quot;&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    &lt;div class=&quot;header&quot;&gt;温馨提示 &lt;i&gt;x&lt;/i&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">    &lt;div class=&quot;body&quot;&gt;您没有删除权限操作&lt;/div&gt;</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">  &lt;/div&gt; --&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Modal</span><span style="color:#ABB2BF;">(</span><span style="color:#E06C75;font-style:italic;">title</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">,</span><span style="color:#E06C75;font-style:italic;">message</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;&#39;</span><span style="color:#ABB2BF;">){</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">modalBox</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">createElement</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;div&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">modalBox</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">className</span><span style="color:#56B6C2;">=</span><span style="color:#98C379;">&#39;modal&#39;</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">modalBox</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">innerHTML</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">=</span><span style="color:#ABB2BF;"> </span><span style="color:#98C379;">\`</span></span>
<span class="line"><span style="color:#98C379;">        &lt;div class = &quot;header&quot;&gt;</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">title</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">&lt;i&gt;x&lt;i&gt;&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">        &lt;div class = &quot;body&quot;&gt;</span><span style="color:#C678DD;">\${</span><span style="color:#E06C75;">message</span><span style="color:#C678DD;">}</span><span style="color:#98C379;">&lt;/div&gt;</span></span>
<span class="line"><span style="color:#98C379;">      \`</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;">//要点1:不要使用箭头函数</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">Modal</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">open</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//bug修复：多次点击创建多个模态框。修复：判断有则删除--&gt;创建。没有--&gt;创建</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">box</span><span style="color:#56B6C2;">=</span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">querySelector</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;.modal&#39;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E06C75;">box</span><span style="color:#ABB2BF;"> </span><span style="color:#56B6C2;">&amp;&amp;</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">box</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">remove</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">body</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">append</span><span style="color:#ABB2BF;">(</span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">modalBox</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#7F848E;font-style:italic;">//要点2：关闭卸载打开里面，因为打开了以后才能关闭</span></span>
<span class="line"><span style="color:#ABB2BF;">        </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">querySelector</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;i&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;click&#39;</span><span style="color:#ABB2BF;">,()</span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">          </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">close</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">        })</span></span>
<span class="line"><span style="color:#ABB2BF;">       </span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E5C07B;">Modal</span><span style="color:#ABB2BF;">.</span><span style="color:#E06C75;">prototype</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">close</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">function</span><span style="color:#ABB2BF;">(){</span></span>
<span class="line"><span style="color:#ABB2BF;">       </span><span style="color:#E5C07B;">this</span><span style="color:#ABB2BF;">.</span><span style="color:#E5C07B;">modalBox</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">remove</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">    }</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">querySelector</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#delete&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;click&#39;</span><span style="color:#ABB2BF;">,()</span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">del</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Modal</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;提示&#39;</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&quot;你没有权限删除&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">del</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">open</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">   })</span></span>
<span class="line"><span style="color:#ABB2BF;">   </span><span style="color:#E5C07B;">document</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">querySelector</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;#login&#39;</span><span style="color:#ABB2BF;">).</span><span style="color:#61AFEF;">addEventListener</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;click&#39;</span><span style="color:#ABB2BF;">,()</span><span style="color:#C678DD;">=&gt;</span><span style="color:#ABB2BF;">{</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#C678DD;">const</span><span style="color:#ABB2BF;"> </span><span style="color:#E5C07B;">login</span><span style="color:#56B6C2;">=</span><span style="color:#C678DD;">new</span><span style="color:#ABB2BF;"> </span><span style="color:#61AFEF;">Modal</span><span style="color:#ABB2BF;">(</span><span style="color:#98C379;">&#39;提示&#39;</span><span style="color:#ABB2BF;">,</span><span style="color:#98C379;">&quot;你还没有注册&quot;</span><span style="color:#ABB2BF;">)</span></span>
<span class="line"><span style="color:#ABB2BF;">      </span><span style="color:#E5C07B;">login</span><span style="color:#ABB2BF;">.</span><span style="color:#61AFEF;">open</span><span style="color:#ABB2BF;">()</span></span>
<span class="line"><span style="color:#ABB2BF;">   })</span></span>
<span class="line"><span style="color:#ABB2BF;">  &lt;/</span><span style="color:#E06C75;">script</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">body</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">&lt;/</span><span style="color:#E06C75;">html</span><span style="color:#ABB2BF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function r(i,y){return n(),l("div",null,[c,a(" more "),t])}const d=s(B,[["render",r],["__file","模态框.html.vue"]]);export{d as default};
