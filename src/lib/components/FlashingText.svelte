<script lang="ts">
    interface Props {
        text: string;
        typingDelay?: number; // Delay between typing characters
        endsDelay?: number; // Delay before starting to erase
    }

    const { text, typingDelay = 200, endsDelay = 1000 }: Props = $props();

    type Direction = 'forward' | 'backward';
    let dir: Direction = 'backward';

    let displayText = $state(text);
    let charIdx = text.length;

    function wait(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function start() {
        const interval = setInterval(async () => {
            if (dir === 'forward') {
                if (charIdx < text.length) {
                    displayText = text.slice(0, charIdx + 1);
                    charIdx++;
                } else {
                    dir = 'backward';
                    clearInterval(interval);
                    await wait(endsDelay);
                    start();
                }
            } else {
                if (charIdx > 0) {
                    displayText = text.slice(0, charIdx - 1);
                    charIdx--;
                } else {
                    dir = 'forward';
                    clearInterval(interval);
                    await wait(endsDelay);
                    start();
                }
            }
        }, typingDelay);
    }

    start();
</script>

<style>
    .underscore {
        font-weight: bold;
        animation: flash 1s infinite;
    }

    @keyframes flash {
        0% { opacity: 1; }
        49% { opacity: 1; }
        50% { opacity: 0; }
        99% { opacity: 0; }
        100% { opacity: 1; }
    }
</style>

<div>
    { displayText }
    <span class="underscore">_</span>
</div>