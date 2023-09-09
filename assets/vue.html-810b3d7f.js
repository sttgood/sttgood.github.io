const s=JSON.parse(`{"key":"v-7c3718b3","path":"/fe/vue/vue.html","title":"","lang":"zh-CN","frontmatter":{"description":"要素： :model :rules prop v-model &lt;script setup&gt; import { User, Lock } from '@element-plus/icons-vue' import { ref } from 'vue' const isRegister = ref(true) &lt;/script&gt; &lt;template&gt; &lt;el-row class=\\"login-page\\"&gt; &lt;el-col :span=\\"12\\" class=\\"bg\\"&gt;&lt;/el-col&gt; &lt;el-col :span=\\"6\\" :offset=\\"3\\" class=\\"form\\"&gt; &lt;el-form ref=\\"form\\" size=\\"large\\" autocomplete=\\"off\\" v-if=\\"isRegister\\"&gt; &lt;el-form-item&gt; &lt;h1&gt;注册&lt;/h1&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-input :prefix-icon=\\"User\\" placeholder=\\"请输入用户名\\"&gt;&lt;/el-input&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-input :prefix-icon=\\"Lock\\" type=\\"password\\" placeholder=\\"请输入密码\\" &gt;&lt;/el-input&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-input :prefix-icon=\\"Lock\\" type=\\"password\\" placeholder=\\"请输入再次密码\\" &gt;&lt;/el-input&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-button class=\\"button\\" type=\\"primary\\" auto-insert-space&gt; 注册 &lt;/el-button&gt; &lt;/el-form-item&gt; &lt;el-form-item class=\\"flex\\"&gt; &lt;el-link type=\\"info\\" :underline=\\"false\\" @click=\\"isRegister = false\\"&gt; ← 返回 &lt;/el-link&gt; &lt;/el-form-item&gt; &lt;/el-form&gt; &lt;el-form ref=\\"form\\" size=\\"large\\" autocomplete=\\"off\\" v-else&gt; &lt;el-form-item&gt; &lt;h1&gt;登录&lt;/h1&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-input :prefix-icon=\\"User\\" placeholder=\\"请输入用户名\\"&gt;&lt;/el-input&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-input name=\\"password\\" :prefix-icon=\\"Lock\\" type=\\"password\\" placeholder=\\"请输入密码\\" &gt;&lt;/el-input&gt; &lt;/el-form-item&gt; &lt;el-form-item class=\\"flex\\"&gt; &lt;div class=\\"flex\\"&gt; &lt;el-checkbox&gt;记住我&lt;/el-checkbox&gt; &lt;el-link type=\\"primary\\" :underline=\\"false\\"&gt;忘记密码？&lt;/el-link&gt; &lt;/div&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-button class=\\"button\\" type=\\"primary\\" auto-insert-space &gt;登录&lt;/el-button &gt; &lt;/el-form-item&gt; &lt;el-form-item class=\\"flex\\"&gt; &lt;el-link type=\\"info\\" :underline=\\"false\\" @click=\\"isRegister = true\\"&gt; 注册 → &lt;/el-link&gt; &lt;/el-form-item&gt; &lt;/el-form&gt; &lt;/el-col&gt; &lt;/el-row&gt; &lt;/template&gt; &lt;style lang=\\"scss\\" scoped&gt; .login-page { height: 100vh; background-color: #fff; .bg { background: url('@/assets/logo2.png') no-repeat 60% center / 240px auto, url('@/assets/login_bg.jpg') no-repeat center / cover; border-radius: 0 20px 20px 0; } .form { display: flex; flex-direction: column; justify-content: center; user-select: none; .title { margin: 0 auto; } .button { width: 100%; } .flex { width: 100%; display: flex; justify-content: space-between; } } } &lt;/style&gt; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/fe/vue/vue.html"}],["meta",{"property":"og:site_name","content":"SttDoc"}],["meta",{"property":"og:description","content":"要素： :model :rules prop v-model &lt;script setup&gt; import { User, Lock } from '@element-plus/icons-vue' import { ref } from 'vue' const isRegister = ref(true) &lt;/script&gt; &lt;template&gt; &lt;el-row class=\\"login-page\\"&gt; &lt;el-col :span=\\"12\\" class=\\"bg\\"&gt;&lt;/el-col&gt; &lt;el-col :span=\\"6\\" :offset=\\"3\\" class=\\"form\\"&gt; &lt;el-form ref=\\"form\\" size=\\"large\\" autocomplete=\\"off\\" v-if=\\"isRegister\\"&gt; &lt;el-form-item&gt; &lt;h1&gt;注册&lt;/h1&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-input :prefix-icon=\\"User\\" placeholder=\\"请输入用户名\\"&gt;&lt;/el-input&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-input :prefix-icon=\\"Lock\\" type=\\"password\\" placeholder=\\"请输入密码\\" &gt;&lt;/el-input&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-input :prefix-icon=\\"Lock\\" type=\\"password\\" placeholder=\\"请输入再次密码\\" &gt;&lt;/el-input&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-button class=\\"button\\" type=\\"primary\\" auto-insert-space&gt; 注册 &lt;/el-button&gt; &lt;/el-form-item&gt; &lt;el-form-item class=\\"flex\\"&gt; &lt;el-link type=\\"info\\" :underline=\\"false\\" @click=\\"isRegister = false\\"&gt; ← 返回 &lt;/el-link&gt; &lt;/el-form-item&gt; &lt;/el-form&gt; &lt;el-form ref=\\"form\\" size=\\"large\\" autocomplete=\\"off\\" v-else&gt; &lt;el-form-item&gt; &lt;h1&gt;登录&lt;/h1&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-input :prefix-icon=\\"User\\" placeholder=\\"请输入用户名\\"&gt;&lt;/el-input&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-input name=\\"password\\" :prefix-icon=\\"Lock\\" type=\\"password\\" placeholder=\\"请输入密码\\" &gt;&lt;/el-input&gt; &lt;/el-form-item&gt; &lt;el-form-item class=\\"flex\\"&gt; &lt;div class=\\"flex\\"&gt; &lt;el-checkbox&gt;记住我&lt;/el-checkbox&gt; &lt;el-link type=\\"primary\\" :underline=\\"false\\"&gt;忘记密码？&lt;/el-link&gt; &lt;/div&gt; &lt;/el-form-item&gt; &lt;el-form-item&gt; &lt;el-button class=\\"button\\" type=\\"primary\\" auto-insert-space &gt;登录&lt;/el-button &gt; &lt;/el-form-item&gt; &lt;el-form-item class=\\"flex\\"&gt; &lt;el-link type=\\"info\\" :underline=\\"false\\" @click=\\"isRegister = true\\"&gt; 注册 → &lt;/el-link&gt; &lt;/el-form-item&gt; &lt;/el-form&gt; &lt;/el-col&gt; &lt;/el-row&gt; &lt;/template&gt; &lt;style lang=\\"scss\\" scoped&gt; .login-page { height: 100vh; background-color: #fff; .bg { background: url('@/assets/logo2.png') no-repeat 60% center / 240px auto, url('@/assets/login_bg.jpg') no-repeat center / cover; border-radius: 0 20px 20px 0; } .form { display: flex; flex-direction: column; justify-content: center; user-select: none; .title { margin: 0 auto; } .button { width: 100%; } .flex { width: 100%; display: flex; justify-content: space-between; } } } &lt;/style&gt; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-08-31T01:00:30.000Z"}],["meta",{"property":"article:modified_time","content":"2023-08-31T01:00:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-08-31T01:00:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"\\",\\"url\\":\\"\\"}]}"]]},"headers":[],"git":{"createdTime":1693443630000,"updatedTime":1693443630000,"contributors":[{"name":"stt","email":"776599148@qq.com","commits":1}]},"readingTime":{"minutes":1.28,"words":383},"filePathRelative":"fe/vue/vue.md","localizedDate":"2023年8月31日","excerpt":"<p><strong>要素：</strong></p>\\n<ul>\\n<li>:model</li>\\n<li>:rules</li>\\n<li>prop</li>\\n<li>v-model</li>\\n</ul>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"shiki one-dark-pro\\" style=\\"background-color: #282c34\\" tabindex=\\"0\\"><code><span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E06C75\\">script</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">setup</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">import</span><span style=\\"color: #ABB2BF\\"> { </span><span style=\\"color: #E06C75\\">User</span><span style=\\"color: #ABB2BF\\">, </span><span style=\\"color: #E06C75\\">Lock</span><span style=\\"color: #ABB2BF\\"> } </span><span style=\\"color: #C678DD\\">from</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'@element-plus/icons-vue'</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">import</span><span style=\\"color: #ABB2BF\\"> { </span><span style=\\"color: #E06C75\\">ref</span><span style=\\"color: #ABB2BF\\"> } </span><span style=\\"color: #C678DD\\">from</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #98C379\\">'vue'</span></span>\\n<span class=\\"line\\"><span style=\\"color: #C678DD\\">const</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #E5C07B\\">isRegister</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">=</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #61AFEF\\">ref</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #D19A66\\">true</span><span style=\\"color: #ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">&lt;/</span><span style=\\"color: #E06C75\\">script</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E06C75\\">template</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  &lt;</span><span style=\\"color: #E06C75\\">el-row</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">class</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"login-page\\"</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    &lt;</span><span style=\\"color: #E06C75\\">el-col</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">:span</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"12\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">class</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"bg\\"</span><span style=\\"color: #ABB2BF\\">&gt;&lt;/</span><span style=\\"color: #E06C75\\">el-col</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    &lt;</span><span style=\\"color: #E06C75\\">el-col</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">:span</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"6\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">:offset</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"3\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">class</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"form\\"</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      &lt;</span><span style=\\"color: #E06C75\\">el-form</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">ref</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"form\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">size</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"large\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">autocomplete</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"off\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">v-if</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"isRegister\\"</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">h1</span><span style=\\"color: #ABB2BF\\">&gt;注册&lt;/</span><span style=\\"color: #E06C75\\">h1</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">el-input</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">:prefix-icon</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"User\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">placeholder</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"请输入用户名\\"</span><span style=\\"color: #ABB2BF\\">&gt;&lt;/</span><span style=\\"color: #E06C75\\">el-input</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">el-input</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            </span><span style=\\"color: #D19A66\\">:prefix-icon</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"Lock\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            </span><span style=\\"color: #D19A66\\">type</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"password\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            </span><span style=\\"color: #D19A66\\">placeholder</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"请输入密码\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &gt;&lt;/</span><span style=\\"color: #E06C75\\">el-input</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">el-input</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            </span><span style=\\"color: #D19A66\\">:prefix-icon</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"Lock\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            </span><span style=\\"color: #D19A66\\">type</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"password\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            </span><span style=\\"color: #D19A66\\">placeholder</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"请输入再次密码\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &gt;&lt;/</span><span style=\\"color: #E06C75\\">el-input</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">el-button</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">class</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"button\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">type</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"primary\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">auto-insert-space</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            注册</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;/</span><span style=\\"color: #E06C75\\">el-button</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">class</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"flex\\"</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">el-link</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">type</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"info\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">:underline</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"false\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">@click</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"isRegister = false\\"</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            ← 返回</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;/</span><span style=\\"color: #E06C75\\">el-link</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      &lt;/</span><span style=\\"color: #E06C75\\">el-form</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      &lt;</span><span style=\\"color: #E06C75\\">el-form</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">ref</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"form\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">size</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"large\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">autocomplete</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"off\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">v-else</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">h1</span><span style=\\"color: #ABB2BF\\">&gt;登录&lt;/</span><span style=\\"color: #E06C75\\">h1</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">el-input</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">:prefix-icon</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"User\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">placeholder</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"请输入用户名\\"</span><span style=\\"color: #ABB2BF\\">&gt;&lt;/</span><span style=\\"color: #E06C75\\">el-input</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">el-input</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            </span><span style=\\"color: #D19A66\\">name</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"password\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            </span><span style=\\"color: #D19A66\\">:prefix-icon</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"Lock\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            </span><span style=\\"color: #D19A66\\">type</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"password\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            </span><span style=\\"color: #D19A66\\">placeholder</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"请输入密码\\"</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &gt;&lt;/</span><span style=\\"color: #E06C75\\">el-input</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">class</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"flex\\"</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">div</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">class</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"flex\\"</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            &lt;</span><span style=\\"color: #E06C75\\">el-checkbox</span><span style=\\"color: #ABB2BF\\">&gt;记住我&lt;/</span><span style=\\"color: #E06C75\\">el-checkbox</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            &lt;</span><span style=\\"color: #E06C75\\">el-link</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">type</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"primary\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">:underline</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"false\\"</span><span style=\\"color: #ABB2BF\\">&gt;忘记密码？&lt;/</span><span style=\\"color: #E06C75\\">el-link</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;/</span><span style=\\"color: #E06C75\\">div</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">el-button</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">class</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"button\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">type</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"primary\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">auto-insert-space</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            &gt;登录&lt;/</span><span style=\\"color: #E06C75\\">el-button</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">class</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"flex\\"</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;</span><span style=\\"color: #E06C75\\">el-link</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">type</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"info\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">:underline</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"false\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">@click</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"isRegister = true\\"</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">            注册 →</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">          &lt;/</span><span style=\\"color: #E06C75\\">el-link</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">        &lt;/</span><span style=\\"color: #E06C75\\">el-form-item</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      &lt;/</span><span style=\\"color: #E06C75\\">el-form</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    &lt;/</span><span style=\\"color: #E06C75\\">el-col</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  &lt;/</span><span style=\\"color: #E06C75\\">el-row</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">&lt;/</span><span style=\\"color: #E06C75\\">template</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">&lt;</span><span style=\\"color: #E06C75\\">style</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">lang</span><span style=\\"color: #ABB2BF\\">=</span><span style=\\"color: #98C379\\">\\"scss\\"</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">scoped</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #D19A66\\">.login-page</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  height: </span><span style=\\"color: #D19A66\\">100</span><span style=\\"color: #E06C75\\">vh</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  background-color: </span><span style=\\"color: #D19A66\\">#fff</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #D19A66\\">.bg</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    background: </span><span style=\\"color: #56B6C2\\">url</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #98C379\\">'@/assets/logo2.png'</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #D19A66\\">no-repeat</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">60</span><span style=\\"color: #E06C75\\">%</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">center</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">/</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">240</span><span style=\\"color: #E06C75\\">px</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">auto</span><span style=\\"color: #ABB2BF\\">,</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      </span><span style=\\"color: #56B6C2\\">url</span><span style=\\"color: #ABB2BF\\">(</span><span style=\\"color: #98C379\\">'@/assets/login_bg.jpg'</span><span style=\\"color: #ABB2BF\\">) </span><span style=\\"color: #D19A66\\">no-repeat</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">center</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #56B6C2\\">/</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">cover</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    border-radius: </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">20</span><span style=\\"color: #E06C75\\">px</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">20</span><span style=\\"color: #E06C75\\">px</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  </span><span style=\\"color: #D19A66\\">.form</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    display: </span><span style=\\"color: #D19A66\\">flex</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    flex-direction: </span><span style=\\"color: #D19A66\\">column</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    justify-content: </span><span style=\\"color: #D19A66\\">center</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    user-select: </span><span style=\\"color: #D19A66\\">none</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #D19A66\\">.title</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      margin: </span><span style=\\"color: #D19A66\\">0</span><span style=\\"color: #ABB2BF\\"> </span><span style=\\"color: #D19A66\\">auto</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #D19A66\\">.button</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      width: </span><span style=\\"color: #D19A66\\">100</span><span style=\\"color: #E06C75\\">%</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    </span><span style=\\"color: #D19A66\\">.flex</span><span style=\\"color: #ABB2BF\\"> {</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      width: </span><span style=\\"color: #D19A66\\">100</span><span style=\\"color: #E06C75\\">%</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      display: </span><span style=\\"color: #D19A66\\">flex</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">      justify-content: </span><span style=\\"color: #D19A66\\">space-between</span><span style=\\"color: #ABB2BF\\">;</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">    }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">  }</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">}</span></span>\\n<span class=\\"line\\"><span style=\\"color: #ABB2BF\\">&lt;/</span><span style=\\"color: #E06C75\\">style</span><span style=\\"color: #ABB2BF\\">&gt;</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"></span></code></pre><div class=\\"highlight-lines\\"><br><br><br><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><div class=\\"highlight-line\\">&nbsp;</div><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br></div><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{s as data};
