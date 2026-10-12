def split_text(
    text,
    chunk_size=700,
    overlap=100
):
    lines = [line for line in text.split("\n") if line.strip()]

    chunks = []
    current_lines = []
    current_len = 0

    for line in lines:
        line_len = len(line) + 1  # account for the newline we'll rejoin with

        if current_len + line_len > chunk_size and current_lines:
            chunks.append("\n".join(current_lines))

            # Carry the trailing lines forward as overlap, so context isn't
            # lost at chunk boundaries, without cutting any line in half.
            overlap_lines = []
            overlap_len = 0
            for prev_line in reversed(current_lines):
                overlap_len += len(prev_line) + 1
                overlap_lines.insert(0, prev_line)
                if overlap_len >= overlap:
                    break

            current_lines = overlap_lines
            current_len = overlap_len

        current_lines.append(line)
        current_len += line_len

    if current_lines:
        chunks.append("\n".join(current_lines))

    return chunks