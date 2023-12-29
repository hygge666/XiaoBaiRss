<template>
	<footer class="text-left text-[#6c757d] p-6 bg-[rgba(248,249,250,1)] h-[70px]">
		<section class="flex justify-center">
			<!-- Left -->
			<div class="text-[14px] h-[30px]">
				<span
					>2024
					<a
						href="https://www.rss.lxyq.link/news"
						target="_blank"
						class="decoration-transparent text-[#a4715c]"
						>小白rss</a
					>
					· All rights reserved</span
				>
			</div>
			<!-- Left -->

			<div class="flex-grow"></div>
			<!-- Right -->
			<div class="flex text-[20px] text-black">
				<!-- GitHub Icon -->
				<a href="https://github.com/hygge666" target="_blank" class="pr-6 w-">
					<IconsFontAwesome :size="20" class="hover:text-[#0d6efd]" icon="fab fa-github" />
				</a>

				<!-- Telegram Icon -->
				<a
					href="https://lead.lxyq.link/"
					target="_blank"
					class="pr-6 items-start justify-start flex"
				>
					<IconsFontAwesome :size="20" class="hover:text-[#0d6efd]" icon="fab fa-telegram-plane" />
					<!-- <Icon name="uil:telegram-alt" class="text-[24px]"></Icon> -->
				</a>

				<!-- Blog Icon -->
				<a href="http://hylove.top/" target="_blank" class="pr-6">
					<IconsFontAwesome :size="20" class="hover:text-[#0d6efd]" icon="fas fa-blog" />
				</a>

				<!-- WeChat Icon -->
				<a
					href="https://img01.anheyu.com/useruploads/156/2023/12/28/658cfc95014fe.jpeg"
					target="_blank"
					class="pr-6"
				>
					<IconsFontAwesome :size="20" class="hover:text-[#0d6efd]" icon="fas fa-qrcode" />
				</a>
			</div>
		</section>
	</footer>
</template>

<script setup lang="ts"></script>

<style scoped></style>
